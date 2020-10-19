import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumsComponent } from '../shared/breadcrums/breadcrums.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { HeaderComponent } from '../shared/header/header.component';




@NgModule({
  declarations: [
    BreadcrumsComponent,
    SidebarComponent,
    HeaderComponent,
  ],

  exports: [
    BreadcrumsComponent,
    SidebarComponent,
    HeaderComponent,
  ],

  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
