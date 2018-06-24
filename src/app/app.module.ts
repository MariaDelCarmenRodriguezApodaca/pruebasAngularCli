import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.componet';
import { empleadoComponent } from './empleado/empeado.component';

//yo lo importe
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    empleadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] //se indica el componente principal con el que la app se lanza
})
export class AppModule { }
