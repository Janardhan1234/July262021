import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:8000/api/user';
  bankBaseUrl = 'http://localhost:8000/api/bankdetails';

  constructor(private http:HttpClient) { }

  postData(obj:any){
    return this.http.post(this.baseUrl,obj);
  }

  getData(){
    let s = {maxAge:"20",minAge:"18"}
    return this.http.get(this.baseUrl,{params:s});
  }

  getDataById(id:any){
    return this.http.get(this.baseUrl, id);
  }

  updateDataById(id:any, data:any){
    console.log("id", id);
    return this.http.patch(`${this.baseUrl}/${id}`, data);
  }

  deleteDataById(id:any){
    return this.http.delete(`${this.baseUrl}/${id}`); 
  }

  postBankDetail(id:any, obj:any){
    return this.http.post(`${this.bankBaseUrl}/${id}`,obj);
  }

  getBankDetail(id:any){
    return this.http.get(`${this.bankBaseUrl}/${id}`);
  }

}
