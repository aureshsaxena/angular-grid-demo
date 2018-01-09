import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { GridDataResult, PageChangeEvent,DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  private gridView: GridDataResult;
  private pageSize = 0;
  private totalProduct=0;
  public skip = 0;
  private dataLength = 0;
  private data;
  private stateText="Initial State";

  constructor(private employeesService: EmployeesService)  { }
  getEmpData(){
    this.stateText="Calling Employee";
    /*this.employeesService.getEmpData()
      .subscribe(data => {console.log(data);console.log("here")
      //this.data=;
      this.data=data;
      this.stateText=JSON.stringify(this.data);
      this.stateText="Got Employee Data";
      this.pageSize=data['l'];
      this.data=data['d'];
      this.totalProduct=data['t']
      this.gridView = {
          data: data['d'],
          total: data['t']
      };
      } , error => {
      console.log(error)
})*/
  }

  ngOnInit() {
    this.getEmpData()
  }

}
