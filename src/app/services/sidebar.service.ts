import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Dash', url: '/'},
        {titulo: 'ProgressBar', url: 'progress'},
        {titulo: 'Graficas', url: 'grafica1'}
      ]

    }

  ]


  constructor() { }
}