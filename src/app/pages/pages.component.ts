import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitFunctions();



@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor( private settingsService: SettingsService) { }

  ngOnInit(): void {

    // es una funcion del theme, que disparo cuando vuelvo a entrar desde el login

    customInitFunctions();


 }



}
