//import { Component, OnInit } from '@angular/core';
import { Component, ViewChild } from "@angular/core";
import { CommentsService } from '../comments.service';
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
  private components;
  private cacheBlockSize;
  private totalProduct=500;
  private page = 1;
  private skip=0;
  private col='';
  private order="";
  private filterfield=''
  private filterfieldVal=''

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
  public getCommentData(params){
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
      let columnName=Object.keys(data[0])
      let columns=[];
      for(let i=0; i<columnName.length;i++) {
        if(columnName[i]=="email"){
          columns.push({headerName: columnName[i].toUpperCase(), field: columnName[i],filter: "text"});
        }else{
          columns.push({headerName: columnName[i].toUpperCase(), field: columnName[i],suppressFilter: true});
        }

      };
      this.stetxt=JSON.stringify(params)
      this.columnDefs=columns;
      let rowsThisPage=data;
      //{"startRow":0,"endRow":100,"sortModel":[{"colId":"id","sort":"asc"}],"filterModel":{}}
      var lastRow = -1;
      if (this.totalProduct <= params.endRow) {
        lastRow = this.totalProduct;
      }
      params.successCallback(rowsThisPage, lastRow);
      } , error => {
        this.stetxt =JSON.stringify(error)
         error
      })
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.stetxt=this.stetxt+"onGridReady -";
        var dataSource = {
          rowCount: null,
          getRows: (params)=> {
              this.getCommentData(params)
          }
        };
        params.api.setDatasource(dataSource);
      }
  }
