import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class Prueba {
  id: number;
  name: string;
  description: string;

  constructor(id: number, name: string, description: string) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}


@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  private apiUrl = 'http://localhost:8080/prueba/all'

  constructor(private http: HttpClient) { }

  // Se suscribe a rxjs al endpoint y se trae los datos de tipo Prueba
  getPruebas(): Observable<Prueba[]> {
    return this.http.get<Prueba[]>(this.apiUrl);
  }
}
