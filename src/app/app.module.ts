import { TeamManagementService } from './team-management.service';
import { TesComponent } from './tes/tes.component';
import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TiketComponent } from './tiket/tiket.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormAccountComponent } from './form-account/form-account.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AgenComponent } from './agen/agen.component';
import { FormAgenComponent } from './form-agen/form-agen.component';
import { DetailAccountComponent } from './detail-account/detail-account.component';
import { ThreadComponent } from './thread/thread.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule,InputTextModule, ConfirmDialogModule, ConfirmationService, GrowlModule, InputSwitchModule } from 'primeng/primeng';
import { PicComponent } from './pic/pic.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    TiketComponent,
    DashboardComponent,
    AccountComponent,
    FormAccountComponent,
    TesComponent,
    AgenComponent,
    FormAgenComponent,
    DetailAccountComponent,
    ThreadComponent,
    PicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    ConfirmDialogModule,
    GrowlModule,
    InputSwitchModule
  ],
  providers: [
    DataService,
    TeamManagementService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
