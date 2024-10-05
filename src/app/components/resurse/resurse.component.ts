import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resurse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resurse.component.html',
  styleUrl: './resurse.component.css'
})
export class ResurseComponent {

  resources = [
    { id: 1, name: 'Laptop', type: 'Tehnologie', availability: true, responsible: 'Ion Popescu' },
    { id: 2, name: 'Proiector', type: 'Tehnologie', availability: true, responsible: 'Maria Ionescu' },
    { id: 3, name: 'Măsuță de conferință', type: 'Mobilier', availability: false, responsible: 'Andrei Georgescu' },
    { id: 4, name: 'Scaun ergonomic', type: 'Mobilier', availability: true, responsible: 'Elena Marinescu' },
    { id: 5, name: 'Imprimantă', type: 'Tehnologie', availability: true, responsible: 'George Ionescu' },
    { id: 6, name: 'Tablă albă', type: 'Echipament', availability: false, responsible: 'Ana Dobre' },
    { id: 7, name: 'Microfon', type: 'Echipament', availability: true, responsible: 'Victor Radu' },
    { id: 8, name: 'Laptop de rezervă', type: 'Tehnologie', availability: true, responsible: 'Sofia Albu' },
    { id: 9, name: 'Cabluri de conectare', type: 'Accesorii', availability: true, responsible: 'Cristian Petrescu' },
    { id: 10, name: 'Camere video', type: 'Tehnologie', availability: false, responsible: 'Bianca Munteanu' },
  ];

  editResource(id: number) {
    console.log(`Editează resursa cu ID: ${id}`);
    // Logica pentru a edita resursa
  }

  deleteResource(id: number) {
    console.log(`Șterge resursa cu ID: ${id}`);
    // Logica pentru a șterge resursa
  }

}
