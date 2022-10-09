import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/classes/Empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.sass'],
})
export class CrearEmpleadoComponent implements OnInit {
  constructor(
    private empleadoService: EmpleadoService,
    private router: Router,
  ) {}

  form = new FormGroup({
    nombre: new FormControl<string>(''),
    apellido: new FormControl<string>(''),
    email: new FormControl<string>(''),
  });

  ngOnInit(): void {}

  postEmpleado(empleado_obj: Empleado) {
    this.empleadoService.registrarEmpleado(empleado_obj).subscribe({
      next: (data) => {
        console.log(data);
        this.pushListaEmpleados();
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  pushListaEmpleados() {
    this.router.navigate(['/empleados']);
  }

  crearEmpleado() {
    console.table(this.form.value);
    console.log(this.form.valid);
    if (this.form.valid) {
      let empleado_nuevo: Empleado = this.form.value as Empleado;
      this.postEmpleado(empleado_nuevo);
      this.form.reset();
    }
  }
}
