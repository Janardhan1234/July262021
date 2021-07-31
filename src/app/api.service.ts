import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:8000/api/user';

  constructor(private http:HttpClient) { }

  postData(obj:any){
    return this.http.post(this.baseUrl,obj);
  }

  getData(){
    return this.http.get(this.baseUrl);
  }

  getDataById(id:any){
    return this.http.get(this.baseUrl, id);
  }

  updateDataById(id:any, data:any){
    console.log("id", id);
    return this.http.patch(`${this.baseUrl}/${id}`, data);
  }
}
