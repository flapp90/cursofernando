import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { AuthRoutingModule } from './auth.routing';





@NgModule({
  declarations: [

    LoginComponent,
    RegisterComponent,
  ],
  exports:[
    LoginComponent,
    RegisterComponent,

  ],

  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class AuthModule { }
