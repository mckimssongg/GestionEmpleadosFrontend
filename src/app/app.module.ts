import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
@NgModule({
  declarations: [AppComponent, ListaEmpleadosComponent, SidebarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
