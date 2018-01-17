//import { Component, OnInit } from '@angular/core';
import { Component, ViewChild } from "@angular/core";
import { CommentsService } from '../comments.service';
import { ImageTemplateComponent } from '../image-template/image-template.component';
import { EmailTemplateComponent } from '../email-template/email-template.component';
import "ag-grid-enterprise";
import {LicenseManager} from "ag-grid-enterprise/main";
//LicenseManager.setLicenseKey();
@Component({
  selector: 'app-aggridv2',
  templateUrl: './aggridv2.component.html',
  styleUrls: ['./aggridv2.component.css']
})
export class Aggridv2Component {

  private gridApi;
  private gridColumnApi;
  private stetxt=""
  private columnDefs;
  private rowSelection;
  private rowModelType;
  private paginationPageSize;
  private cacheOverflowSize;
  private maxConcurrentDatasourceRequests;
  private infiniteInitialRowCount;
  private maxBlocksInCache;
  private getRowNodeId;

  private cacheBlockSize;
  private totalProduct=500;
  private page = 1;
  private col='';
  private order="";
  private filterfield=''
  private filterfieldVal=''
  private rowHeight="100"
  private stetxts;

  constructor(private commentsService: CommentsService) {
    this.columnDefs = [

    ];
    this.rowSelection = "multiple";
    this.rowModelType = "infinite";
    this.paginationPageSize = 5;
    this.cacheOverflowSize = 1;
    this.maxConcurrentDatasourceRequests = 1;
    this.infiniteInitialRowCount = 1;
    this.maxBlocksInCache = 1;
    this.cacheBlockSize = this.paginationPageSize;
    this.getRowNodeId = function(item) {
      return item.id;
    };

  }
  getColumnInfo(){
    this.commentsService.getCommentData(this.page,this.paginationPageSize,this.col,this.order,this.filterfield,this.filterfieldVal)
      .subscribe(data => {
      this.stetxt=this.stetxt+"Set Columns response -";
      let columnName=Object.keys(data[0])
      let columns=[];
      for(let i=0; i<columnName.length;i++) {
        if(columnName[i]=="email"){
          columns.push({headerName: columnName[i].toUpperCase(), field: columnName[i],filter: "text",sortingOrder: ["desc", "asc"],cellRendererFramework: EmailTemplateComponent});
        }else{
          columns.push({headerName: columnName[i].toUpperCase(), field: columnName[i],suppressFilter: true,sortingOrder: ["desc", "asc"]});
        }

      };
      columns.push({headerName: "Profile Pic",height:100,field: "profilepic", suppressFilter: true,cellRendererFramework: ImageTemplateComponent});
      this.columnDefs=columns;
  })
}
   getCommentData(params){
    this.stetxt=this.stetxt+"Api Call -";
    this.page= (params.startRow/this.paginationPageSize)+1
    if((params.sortModel).length){
      this.col=params.sortModel[0]['colId'];
      this.order=params.sortModel[0]['sort']
    }
    let filterModel=params.filterModel;
    if(Object.keys(filterModel).length){

      this.filterfield=String(Object.keys(filterModel));
      this.filterfieldVal=filterModel[String(this.filterfield)]['filter']
    }
    this.commentsService.getCommentData(this.page,this.paginationPageSize,this.col,this.order,this.filterfield,this.filterfieldVal)
      .subscribe(data => {
      this.stetxt=this.stetxt+"Api response -";
      this.stetxt=JSON.stringify(data.length)
      for(let i =0; i<data.length;i++){
        data[i]['profilepic']="/assets/Pic.jpg";
      }
      //this.stetxt=JSON.stringify(data)
      //this.stetxt=JSON.stringify(params)
      let rowsThisPage=data;
      //{"startRow":0,"endRow":100,"sortModel":[{"colId":"id","sort":"asc"}],"filterModel":{}}
      var lastRow = -1;
      if (this.totalProduct <= params.endRow) {
        lastRow = this.totalProduct;
      }
      params.successCallback(rowsThisPage, lastRow);
      if(localStorage.length){
        let savedState = localStorage.getItem('savedState')
        if(typeof savedState != null)
        this.gridColumnApi.setColumnState(JSON.parse(savedState));
      }
      } , error => {
        this.stetxt =JSON.stringify(error)
         error
      })
  }
  onColumnVisible(params){
    let savedState = this.gridColumnApi.getColumnState();
    localStorage.setItem('savedState', JSON.stringify(savedState));
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.stetxt=this.stetxt+"onGridReady -";
    this.getColumnInfo();
        var dataSource = {
          rowCount: null,
          getRows: (params)=> {
              this.getCommentData(params)
          }
        };
        params.api.setDatasource(dataSource);
      }
  }
