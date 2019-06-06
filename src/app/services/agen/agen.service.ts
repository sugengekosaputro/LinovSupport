import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AgenService {

  private url = 'http://localhost:8181/agen'
  constructor(private http: Http) { }

  getAgents(){
    return this.http.get(this.url);
  }

  postAgent(data){
    return this.http.post(this.url, data);
  }

  delelteAgent(id){
    return this.http.delete(this.url + '/del/' + id);
  }

}
