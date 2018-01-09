import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';

@Injectable()
export class EmployeesService {

  constructor(private http: HttpClient) { }

  private pageSize = 5;
  private empUrl = 'http://localhost.learning.com/mysql.php';
  getEmpData(skip=0){
    let params = new HttpParams();
    params = params.append('page',String(skip));
    //return this.http.get(this.empUrl,{params:params})

  }

}
