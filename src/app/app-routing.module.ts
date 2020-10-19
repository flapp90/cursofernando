import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesRoutingModule } from './pages/pages.routing';


//defino rutas

const routes: Routes = [


  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  { path: '**', component: NopagefoundComponent },

]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
