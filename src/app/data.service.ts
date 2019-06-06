import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  
  constructor(private http: HttpClient) { }
  
  getAccount(){
    return this.http.get('http://localhost:8181/accountv2');
    //return this.http.get('http://192.168.43.70:8080/accountv2');
  }
  
  getAgen(){
    //    return this.http.get('http://localhost:8181/accountv2');
    return this.http.get('http://192.168.43.70:8080/agen/ / /');
  }
  
  postAccount(data){
    return this.http.post('http://localhost:8181/accountv2', data);
  }
}
