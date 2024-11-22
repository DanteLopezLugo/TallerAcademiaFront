import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Prueba, PruebaService } from './prueba.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule], 
  templateUrl: './app.component.html',
})
export class AppComponent {
  // Se genera un arreglo vacio de Prueba
  pruebas: Prueba[] = [];
  loading: boolean = true;
  errorMessage: string = '';

  constructor(private pruebaService: PruebaService) { }

  // Se trae las pruebas apenas renderiza el componente
  ngOnInit(): void {
    this.getPruebas();
  }


  // Metodo para obtener la lista de tipo Prueba
  getPruebas(): void {
    this.pruebaService.getPruebas().subscribe({
      next: (data) => {
        this.pruebas = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching pruebas', err);
        this.errorMessage = 'There was an error fetching the data';
        this.loading = false;
      }
    });
  }
}
