import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';


//defino rutas

const routes: Routes = [


    { path: '**', component: NopagefoundComponent },

]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
