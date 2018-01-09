import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class CommentsService {

  constructor(private http: HttpClient) { }

  //private empUrl = 'http://localhost.learning.com/mysql.php';
  private commentUrl = 'https://jsonplaceholder.typicode.com/comments';
  getCommentData(page,limit,col,order,filterfield,filterfieldVal): Observable<any[]>{
    let params = new HttpParams();
    params = params.append('_page',String(page));
    params = params.append('_limit',String(limit));
    if(col!=""){
      params = params.append('_sort',String(col));
    }
    if(order!=""){
      params = params.append('_order',String(order));
    }
    if(filterfield!=""){
      params = params.append(filterfield+'_like',String(filterfieldVal));
    }

    return this.http.get(this.commentUrl,{params:params})

  }

}
