import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ProgressComponent } from '../pages/progress/progress.component';
import { Grafica1Component } from '../pages/grafica1/grafica1.component';

import { PagesComponent } from '../pages/pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

//defino rutas

const routes: Routes = [

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [

      { path: 'progress', component: ProgressComponent },
      { path: 'grafica1', component: Grafica1Component },
      { path: 'account-settings', component: AccountSettingsComponent },

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
