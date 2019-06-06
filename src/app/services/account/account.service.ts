import { Account } from './../../shared/account.model';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AccountService {

  private url = 'http://localhost:8181/accountv2/all';
  //private url = 'http://192.168.43.180:8181/accountv2/all';

  constructor(private http: Http) { }

  getAccounts(){
    return this.http.get(this.url)
  }

  getAccount(id: string){
    return this.http.get('http://localhost:8181/accountv2'+ '/' + id);
  }

  postAccount(data){
    let dt = JSON.stringify(data);
    // let headerOpt = new Headers({'content-type': 'multipart/form-data', 'Content-type': 'application/json'})
    // let requestOpt = new RequestOptions({headers : headerOpt})
    // return this.http.post(this.url + '/param',dt,requestOpt);
    return this.http.post('http://localhost:8181/accountv2' + '/params',data);
  }

  putAccount(data){
    return this.http.put(this.url,data);
  }

  deleteAccount(id: string){
    return this.http.delete('http://localhost:8181/accountv2' + '/' + id);
  }

  // getAccounts(){
  //   this.http.get(this.url)
  //     .map((data: Response) => { return data.json() as Account[] })
  //     .toPromise()
  //     .then(x => {this.listAccounts = x;})
  // }

  // getAccount(id: string){
  //   this.http.get(this.url + '/' + id)
  //     .map((data: Response) => { return data.json() as Account })
  //     .toPromise()
  //     .then(x => { this.singleAccount = x;})
  // }

}
