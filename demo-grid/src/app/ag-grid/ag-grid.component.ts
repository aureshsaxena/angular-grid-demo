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

   private columnDefs: any[]
   private rowData: any[];
   private stateText="hi"
   private paginationPageSize = 5;
   private totalProduct=500;
   private page = 1;
   private skip=0;
   private col='';
   private order="";
   private filterfield=''
   private filterfieldVal=''
  constructor(private commentsService: CommentsService) {
    this.gridOptions = <GridOptions>{ enableFilter: true,enableSorting: true,pagination: true};
   }
  getCommentData(){
    //this.stateText="Calling Api";
    this.commentsService.getCommentData(this.page,this.paginationPageSize,this.col,this.order,this.filterfield,this.filterfieldVal)
      .subscribe(data => {
      //this.stateText="Got  Data";

      /*for(var i=0; i<4; i++)  {

      }*/
      let columnName=Object.keys(data[0])
      let columns=[];
      for(let i=0; i<columnName.length;i++) {
          columns.push({headerName: columnName[i], field: columnName[i]});


      };
      this.columnDefs=columns;
this.stateText =JSON.stringify("params")//+JSON.stringify(this.gridApi);
      this.rowData = data;




      } , error => {
        this.stateText =JSON.stringify(error)
      })
  }
  onGridReady(params) {




  }
  onPaginationChanged(event){
    //this.stateText=+"page="+JSON.stringify(event)
  }
  onFilterChanged(event){
    //this.stateText=+"filterChanged= "+JSON.stringify(event)
  }
  onSortChanged(event){
    //this.stateText=+"sortChanged = "+JSON.stringify(event)
  }
  ngOnInit() {
    this.getCommentData()
  }

}
