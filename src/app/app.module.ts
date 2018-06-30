import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//importamos las rutas
import { routing, appRoutingProviders } from './app.routing';


import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.componet';
import { EmpleadoComponent } from './empleado/empeado.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CochesComponent } from './coches/coches.component';


//yo lo importe
import { FormsModule } from '@angular/forms'
//importare la pipe
import { ConversorPipe } from './pipes/conversor.pipe';


//delcarations = {directivas pipes y componentes}
@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    HomeComponent,
    ContactoComponent,
    ConversorPipe,
    CochesComponent
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
