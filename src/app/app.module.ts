import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { CrearEmpleadoComponent } from './components/crear-empleado/crear-empleado.component';

// Components angular
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadosComponent,
    SidebarComponent,
    CrearEmpleadoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // Components angular
    MatCardModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
