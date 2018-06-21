import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //con que etiqueta cargamos nuestro componente
  templateUrl: './app.component.html', //asignarle una vista o una plantilla en un fichero html
  styleUrls: ['./app.component.css'] //aisgnarle un estilo a la plantilla
})

export class AppComponent {
  title = 'This is my first component';
  nombre = 'Maria del Carmen Rodriguez';
}
