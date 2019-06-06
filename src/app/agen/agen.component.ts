import { AccountService } from './../services/account/account.service';
import { AgenService } from './../services/agen/agen.service';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'app-agen',
  templateUrl: './agen.component.html',
  styleUrls: ['./agen.component.css'],
  providers: [AgenService, AccountService]
})
export class AgenComponent implements OnInit {
  agents: any[];
  accounts: any[];

  constructor(
    private agenService: AgenService,
    private confirmationService: ConfirmationService
    ) { }

  ngOnInit() {
    this.getAgents()
  }

  getAgents(){
    this.agenService.getAgents()
      .subscribe(res => {
        this.agents = res.json();
        console.log(res.json());
      })
  }

  confirmDelete(id,nama){
    this.confirmationService.confirm({
      message: 'Anda Yakin ingin menghapus data <strong>'+ nama +'</strong> ?',
      accept: () => {
        this.deleteAgent(id)
      }
    })
  }

  deleteAgent(id){
    this.agenService.delelteAgent(id)
      .subscribe(res => console.log(res))
  }

}
