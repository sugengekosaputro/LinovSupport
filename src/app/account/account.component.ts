import { Message } from 'primeng/components/common/api';
import { ConfirmationService } from 'primeng/primeng';
import { Account } from './../shared/account.model';
import { AccountService } from './../services/account/account.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '@angular/http';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [AccountService]
})
export class AccountComponent implements OnInit {
  
  accounts : any[];
  display = 'none';
  msgs: Message[] = [];
  ms: string;
  
  constructor(
    private accountService: AccountService,
    private confirmationService: ConfirmationService
  ) { }
  
  ngOnInit() {
    this.getAccounts()
  }
  
  getAccounts(){
    this.accountService.getAccounts()
    // .subscribe(res => {this.accounts = res.json(); console.log(res.json())})
    .map((data: Response) => { return data.json()})
    .toPromise()
    .then(x => {this.accounts = x; console.log(x); })
  }
  
  delete(id){
    this.accountService.deleteAccount(id)
      .subscribe(
        res => {
          this.getAccounts()
          this.toastMessage("asdasd")
        }
      )
  }

  toastMessage(a:any){
    this.ms = a;
    this.msgs = [];
    this.msgs.push(
      {severity:'info', summary:'Confirmed', detail:'Record deleted'}
    )
  }
  
  confirmDelete(id, nama){
    this.confirmationService.confirm({
      message: 'Anda Yakin ingin menghapus data <strong>'+ nama +'</strong> ?',
      accept: () => {
        this.delete(id)
      }
    })
  }
}
