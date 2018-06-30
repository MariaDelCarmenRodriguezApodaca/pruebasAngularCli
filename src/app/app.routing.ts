//este archivo lo genere yo para poder ahcer routing en angular

//importare los modulos de algular que necesita para rutear
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from  '@angular/router';

//importar componentes
import { EmpleadoComponent } from './empleado/empeado.component';
import { FrutaComponent } from './fruta/fruta.componet';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CochesComponent } from './coches/coches.component';

//creamos un array de tipo routes
const appRoutes:Routes=[
	{ path:'', component:HomeComponent},//cuando no ingresa ninguna ruta abre esta pagina
	{ path:'home', component:HomeComponent },
	{ path:'empleado', component: EmpleadoComponent },
	{ path:'fruta', component:FrutaComponent },
	{ path:'contacto', component:ContactoComponent},
	{ path:'contacto/:page', component:ContactoComponent},
	{ path:'coches', component:CochesComponent },
	{ path:'**',component:HomeComponent} //cuando se produce un error muestra esta pagina
]


//exportamos
export const appRoutingProviders:any=[];//este es un procedimiento que necsita angular para poder cargar el propvider de la ruta
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);//con este metodo le decimos que array de rutas tiene que cargar





