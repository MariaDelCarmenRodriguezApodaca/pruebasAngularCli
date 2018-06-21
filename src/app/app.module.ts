import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.componet';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] //se indica el componente principal con el que la app se lanza
})
export class AppModule { }
