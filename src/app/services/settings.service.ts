import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ///selecciona el objeto y lo mete en una variable

  public linkTheme = document.querySelector('#theme');

  constructor() {
    ///Traigo el tema del local storage, sino tengo nada guardado, pongo uno en default
    const url: string = localStorage.getItem('theme') || `./assets/css/colors/default-dark.css`;
    this.linkTheme.setAttribute('href', url);

  }
  changeTheme(theme: string) {

    //// arma la url de donde estaria el tema en cuestion
    const url = `./assets/css/colors/${theme}.css`;
    /// setea el atributo del objeto con la nueva url
    this.linkTheme.setAttribute('href', url);
    //me guardo localmente el tema
    localStorage.setItem('theme', url);
    //disparo la funcion que marca el tilde
    this.checkCurrentTheme();

  }

  //me fijo el tema actual para poner el tilde
  checkCurrentTheme(): void {

    //inicializo la variable
    const links: NodeListOf<Element> = document.querySelectorAll('.selector');
    /////////////////////////////////////////////////////////////

    links.forEach(elem => {

      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme.getAttribute('href');

      if (btnThemeUrl === currentTheme) {
        elem.classList.add('working');
      }
    })
  }
}
