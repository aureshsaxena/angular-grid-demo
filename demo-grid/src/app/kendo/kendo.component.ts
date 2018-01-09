import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';
import { GridDataResult, PageChangeEvent,DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy ,State} from '@progress/kendo-data-query';

@Component({
  selector: 'app-kendo',
  templateUrl: './kendo.component.html',
  styleUrls: ['./kendo.component.css']
})
export class KendoComponent implements OnInit {
  private gridView: GridDataResult;
  private pageSize = 5;
  private totalProduct=500;
  private page = 1;
  private skip=0;
  private col='';
  private order="";
  private filterfield=''
  private filterfieldVal=''
  private sort: SortDescriptor[] = [];
  private state: State = {};
  private stateText="Initial State";
  constructor(private commentsService: CommentsService)  { }
  getCommentData(){
    this.stateText="Calling Api";
    this.commentsService.getCommentData(this.page,this.pageSize,this.col,this.order,this.filterfield,this.filterfieldVal)
      .subscribe(data => {
      this.stateText="Got  Data";
      if(this.col!="" && this.order!=""){
        this.stateText="Got  Data Sort now";
        this.gridView = {
            data: orderBy(data, this.sort),
            total: 500
        };
      }else{
        this.gridView = {
            data: (data),
            total: 500
        };
      }

      } , error => {
        this.stateText =JSON.stringify(error)
      })
  }
   pageChange(event: PageChangeEvent): void {
        this.page= (event.skip/event.take)+1
        this.pageSize= event.take;
        this.skip=event.skip
         this.getCommentData()
   }
   sortChange(sort: SortDescriptor[]): void {
       this.stateText =JSON.stringify(sort)
       this.sort=sort;
       let sortType=sort[0]
       this.col=sortType.field;
       this.order=sortType.dir;
       this.stateText="Sort called on "+this.col;
       this.getCommentData()
   }
   dataStateChange(state: DataStateChangeEvent): void {
     //{"filter":{"filters":[{"field":"postId","operator":"contains","value":"1"}],"logic":"and"},"group":[],"skip":0,"sort":[{"dir":"asc","field":"postId"}],"take":5}

        let filter=state['filter']['filters'];
        this.filterfield=filter['field']
        this.filterfieldVal=filter['value']
        this.stateText ="filter called on "+JSON.stringify(state);
        //this.getCommentData()
    }
  ngOnInit() {
    this.getCommentData()
  }



}
