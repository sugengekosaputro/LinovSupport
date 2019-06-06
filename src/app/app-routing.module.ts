import { PicComponent } from './pic/pic.component';
import { ThreadComponent } from './thread/thread.component';
import { DetailAccountComponent } from './detail-account/detail-account.component';
import { FormAgenComponent } from './form-agen/form-agen.component';
import { AgenComponent } from './agen/agen.component';
import { TesComponent } from './tes/tes.component';
import { FormAccountComponent } from './form-account/form-account.component';
import { AccountComponent } from './account/account.component';
import { TiketComponent } from './tiket/tiket.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component : DashboardComponent
  },
  {
    path: 'dashboard',
    component : DashboardComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path : 'account/tambah',
    component : FormAccountComponent
  },
  {
    path : 'account/preview/:id',
    component : FormAccountComponent
  },
  {
    path: 'agen',
    component: AgenComponent
  },
  {
    path: 'agen/tambah',
    component: FormAgenComponent
  },
  {
    path: 'tiket',
    component : TiketComponent
  },
  {
    path: 'thread/:id',
    component: ThreadComponent
  },
  {
    path: 'tes',
    component : TesComponent
  },
  {
    path: 'pic',
    component : PicComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }