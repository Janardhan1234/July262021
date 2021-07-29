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
}
