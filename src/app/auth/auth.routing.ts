import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


//defino rutas

const routes: Routes = [

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)

  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
