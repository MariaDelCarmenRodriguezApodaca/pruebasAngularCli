import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//importamos las rutas
import { routing, appRoutingProviders } from './app.routing';


import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.componet';
import { EmpleadoComponent } from './empleado/empeado.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';

//yo lo importe
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    HomeComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing 
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent] //se indica el componente principal con el que la app se lanza
})
export class AppModule { }
