import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ProgressComponent } from '../pages/progress/progress.component';
import { Grafica1Component } from '../pages/grafica1/grafica1.component';

import { PagesComponent } from '../pages/pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//defino rutas

const routes: Routes = [

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent, data:{ titulo: 'dashboard'} },
      { path: 'progress', component: ProgressComponent, data:{ titulo: 'progress'} },
      { path: 'grafica1', component: Grafica1Component, data:{ titulo: 'grafica1'} },
      { path: 'account-settings', component: AccountSettingsComponent, data:{ titulo: 'Ajustes de cuenta'} },
      { path: 'promesas', component:  PromesasComponent, data:{ titulo: 'promesas'} },
      { path: 'rxjs', component:  RxjsComponent, data:{ titulo: 'rxjs'} },

    ]
  },

]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)

  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
