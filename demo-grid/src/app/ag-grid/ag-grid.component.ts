import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';
import {GridOptions} from "ag-grid";

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent implements OnInit {
   private gridOptions: GridOptions;
   private gridApi;
   private gridColumnApi;
   private columnDefs;
   private rowData;
   private stateText="hi"
   private eventText='';
   private paginationPageSize = 5;
   private totalProduct=500;
   private page = 1;
   private skip=0;
   private col='';
   private order="";
   private filterfield=''
   private filterfieldVal=''
  constructor(private commentsService: CommentsService) {
    this.columnDefs = [

    ];
    this.gridOptions = <GridOptions>{ enableFilter: true,enableSorting: true};

   }
   onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.stateText =this.stateText+("onGridReady -")


  }
  getCommentData(){
    this.stateText=this.stateText+"Calling Api -";
    this.commentsService.getCommentData(this.page,this.paginationPageSize,this.col,this.order,this.filterfield,this.filterfieldVal)
      .subscribe(data => {
      this.stateText=this.stateText+"Api response -";

      /*for(var i=0; i<4; i++)  {

      }*/
      let columnName=Object.keys(data[0])
      let columns=[];
      for(let i=0; i<columnName.length;i++) {
          columns.push({headerName: columnName[i], field: columnName[i]});


      };

      this.columnDefs=columns;

      this.rowData = data;




      } , error => {
        this.stateText =JSON.stringify(error)
      })
  }

  onFilterChanged(event){

    this.eventText=+"filterChanged= "+JSON.stringify(event)
  }
  onSortChanged(event){
    this.eventText=+"sortChanged = "+JSON.stringify(event)
  }
  ngOnInit() {
    this.getCommentData()
  }

}
