import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-angajati',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angajati.component.html',
  styleUrl: './angajati.component.css'
})
export class AngajatiComponent {

  employees = [
    { id: 1, name: 'Ion Popescu', position: 'Dezvoltator', email: 'ion.popescu@exemplu.com', phone: '0712345678', hireDate: new Date('2022-01-15') },
    { id: 2, name: 'Maria Ionescu', position: 'Designer', email: 'maria.ionescu@exemplu.com', phone: '0723456789', hireDate: new Date('2021-03-20') },
    { id: 3, name: 'Andrei Georgescu', position: 'Manager', email: 'andrei.georgescu@exemplu.com', phone: '0734567890', hireDate: new Date('2020-07-30') },
    { id: 4, name: 'Elena Marinescu', position: 'Analist', email: 'elena.marinescu@exemplu.com', phone: '0745678901', hireDate: new Date('2019-02-10') },
    { id: 5, name: 'George Ionescu', position: 'Testare Software', email: 'george.ionescu@exemplu.com', phone: '0756789012', hireDate: new Date('2023-05-05') },
    { id: 6, name: 'Ana Dobre', position: 'Dezvoltator Frontend', email: 'ana.dobre@exemplu.com', phone: '0767890123', hireDate: new Date('2022-08-15') },
    { id: 7, name: 'Victor Radu', position: 'Dezvoltator Backend', email: 'victor.radu@exemplu.com', phone: '0778901234', hireDate: new Date('2021-11-25') },
    { id: 8, name: 'Sofia Albu', position: 'Manager Proiect', email: 'sofia.albu@exemplu.com', phone: '0789012345', hireDate: new Date('2018-09-09') },
    { id: 9, name: 'Cristian Petrescu', position: 'Designer UI/UX', email: 'cristian.petrescu@exemplu.com', phone: '0790123456', hireDate: new Date('2020-12-01') },
    { id: 10, name: 'Bianca Munteanu', position: 'Dezvoltator Mobil', email: 'bianca.munteanu@exemplu.com', phone: '0701234567', hireDate: new Date('2021-06-17') },
  ];

  viewDetails(id: number) {
    console.log(`Vizualizează detalii pentru angajatul cu ID: ${id}`);
    // Logica pentru a vizualiza detalii suplimentare
  }

}
