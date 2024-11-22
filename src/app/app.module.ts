import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { DoscamposComponent } from './componentes/doscampos/doscampos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DoscamposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Para formularios reactivos
    FormsModule,
    ReactiveFormsModule
    //Fin
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
