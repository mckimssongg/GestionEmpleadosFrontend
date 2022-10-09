import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../classes/Empleado';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  //Url de la API que obtiene el listado de los empleados
  private baseUrl = 'http://localhost:8080/api/v1/empleados';
  constructor(private httpClient: HttpClient) {}

  /**
   * @returns Observable<Empleado[]>
   * @description Obtiene el listado de empleados
   */
  obtenerListaDeEmpleados(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(`${this.baseUrl}`);
  }

  /**
   * @param empleado Empleado
   * @returns Observable<Object>
   * @description Crea un nuevo empleado
   * @example
   * {
   *  "nombre": "Juan",
   * "apellido": "Perez",
   * "email": "
   * }
   */
  registrarEmpleado(empleado: Empleado): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, empleado);
  }
}
