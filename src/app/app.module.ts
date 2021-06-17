//Importamos la clase NgModule que es el módulo raíz.
import { NgModule } from '@angular/core';

//Importamos la clase BrowserModule, para buscar módulos de angular.
import { BrowserModule } from '@angular/platform-browser';

//Importamos los módulos de ruta
import { AppRoutingModule } from './app-routing.module';

//AppComponent es el componente principal de Angular
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { MouseComponent } from './mouse/mouse.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { FormularioComponent } from './formulario/formulario.component';

//Los decoradores son funciones que modifican clases de JavaScript. 
@NgModule({

  //Las declaraciones son las clases de vista que pertenecen a este módulo.
  declarations: [
    AppComponent,
    HeaderComponent,
    SlideshowComponent,
    GaleriaComponent,
    MouseComponent,
    ArticulosComponent,
    FormularioComponent
  ],

  //Importamos otros módulos cuyas clases exportadas sean necesarias para las plantillas de componentes declaradas en este módulo.
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  // Los proveedores son los creadores de servicios que este módulo contribuye a la recolección global de servicios; Se vuelven accesibles en todas las partes de la aplicación. Esto lo habilitamos cuando invocamos servicios desde una base de datos.
  providers: [],


  bootstrap: [AppComponent]
})

//Exportamos la clase del módulo raíz para poder ser invocada en otros archivos
export class AppModule { }
