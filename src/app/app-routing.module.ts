import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEmpleadoComponent } from './components/crear-empleado/crear-empleado.component';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';

const routes: Routes = [
  {
    path: 'empleados',
    component: ListaEmpleadosComponent,
  },
  {
    path: 'crear-empleado',
    component: CrearEmpleadoComponent,
  },
  {
    // Nos redirige a la ruta empleados si no se encuentra la ruta especificada en la url
    path: '',
    redirectTo: '/empleados',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
