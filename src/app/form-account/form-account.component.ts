import { Account } from './../shared/account.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { AccountService } from '../services/account/account.service';

@Component({
  selector: 'app-form-account',
  templateUrl: './form-account.component.html',
  styleUrls: ['./form-account.component.css'],
  providers: [AccountService]
})
export class FormAccountComponent implements OnInit {

  accountForm: FormGroup;
  account: Account;
  id: any;
  selectedFile: File = null;
  pathImg: any;

  constructor(
    private accountService: AccountService,
    private formBuilder: FormBuilder,
    private lastURI : ActivatedRoute,
  ) {
    this.lastURI.params.subscribe(param => this.id = param.id)
   }

  ngOnInit() {    
    this.createForm()
    if(this.id !== undefined){
      this.loadData()
    }
  }

  createForm(){
    this.accountForm = this.formBuilder.group({
      idAccount : ['1'],
      nama: ['', Validators.required],
      telepon: ['', Validators.required],
      alamat: ['', Validators.required],
      active: ['true'],
      pics: this.formBuilder.array([])
    })
    document.getElementById('namaAccount').focus()
  }

  loadData(){
    this.accountService.getAccount(this.id)
    .subscribe(
      res => { 
        this.account = res.json();
        console.log(this.account);
        this.accountForm.patchValue(this.account);
      }
    )
  }

  get picForms() {
    return this.accountForm.get('pics') as FormArray
  }

  addPic() {
    const pic = this.formBuilder.group({
      'nama': ['', Validators.required],
      'email': ['',Validators.required],
      'active': ['true']
    })
    this.picForms.push(pic)
    document.getElementById('namaPIC').focus()
  }

  deletePic(i){
    this.picForms.removeAt(i)
  }

  resetForm(){
    this.accountForm.reset();
  }

  onFileSelected(event){
    let reader = new FileReader();
    this.selectedFile = <File>event.target.files[0];

    reader.readAsDataURL(this.selectedFile);
    reader.onload = (e) => {
      this.pathImg = reader.result
    }

    console.log(event);

  //  if(event.target.files && event.target.files.length){
  //    const [file] = event.target.files;
  //    reader.readAsDataURL(file);

  //    reader.onload = () => {
  //      this.accountForm.patchValue({
  //        gambar : reader.result
  //      })

  //      this.cd.markForCheck()
  //    }
  //  }
  }

  onSubmit(){
    if(this.id == undefined){
      const formData = new FormData();
    
      formData.append('account', JSON.stringify(this.accountForm.value));
      formData.append('gambar', this.selectedFile, this.selectedFile.name);

      this.accountService.postAccount(formData)
        .subscribe(
          res => {
            console.log(res.json);
          },
        )
    }
    else{
      this.accountService.putAccount(this.accountForm.value)
        .subscribe(
          res => {
            console.log(res);
          }
        )
    }
  }

  // getData(id){
  //   this.http.get('http://localhost:8181/accountv2/'+id)
  //     .subscribe(
  //       res => this.account = res.json()
  //     )
  // }
}