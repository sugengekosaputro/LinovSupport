import { AgenService } from './../services/agen/agen.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { AccountService } from '../services/account/account.service';

@Component({
  selector: 'app-form-agen',
  templateUrl: './form-agen.component.html',
  styleUrls: ['./form-agen.component.css'],
  providers:[AccountService, AgenService]
})
export class FormAgenComponent implements OnInit {

  agenForm: FormGroup;
  accounts:any[];

  constructor(
    private accountService: AccountService,
    private agenService: AgenService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.createForm()
    this.getAccounts();
  }

  getAccounts(){
    this.accountService.getAccounts().subscribe(res => this.accounts = res.json())
  }

  createForm(){
    this.agenForm = this.formBuilder.group({
      username : ['', Validators.required],
      password : ['', Validators.required],
      role : ['aa6f7328-39c8-49d0-ad3f-3048a3b9e29b'],
      account: this.formBuilder.group({
        idAccount: ['', Validators.required]
      }),
      email : ['', [Validators.required, Validators.email]],
      nama : ['', Validators.required],
      active : ['true']
    })
  }

  onSubmit() {
    this.agenService.postAgent(this.agenForm.value)
      .subscribe(res => console.log(res))
  }





}
