// budgets.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-budgets',
  standalone: true,
  templateUrl: './bugete.component.html',
  styleUrls: ['./bugete.component.css'],
  imports: [CommonModule]
})
export class BugeteComponent {
  budgets = [
    { id: 1, description: 'Buget Marketing', amount: 5000, date: new Date('2024-01-15'), category: 'Marketing', status: 'Activ', responsible: 'Ion Popescu' },
    { id: 2, description: 'Buget IT', amount: 15000, date: new Date('2024-02-20'), category: 'Tehnologie', status: 'Activ', responsible: 'Maria Ionescu' },
    { id: 3, description: 'Buget Resurse Umane', amount: 8000, date: new Date('2024-03-05'), category: 'Resurse Umane', status: 'Inactiv', responsible: 'Andrei Georgescu' },
    { id: 4, description: 'Buget Logistică', amount: 12000, date: new Date('2024-04-10'), category: 'Logistică', status: 'Activ', responsible: 'Elena Marinescu' },
    { id: 5, description: 'Buget Proiecte', amount: 20000, date: new Date('2024-05-25'), category: 'Proiecte', status: 'Activ', responsible: 'George Ionescu' },
    { id: 6, description: 'Buget Cercetare', amount: 3000, date: new Date('2024-06-30'), category: 'Cercetare', status: 'Activ', responsible: 'Ana Dobre' },
    { id: 7, description: 'Buget Training', amount: 4500, date: new Date('2024-07-15'), category: 'Formare', status: 'Inactiv', responsible: 'Victor Radu' },
    { id: 8, description: 'Buget Vânzări', amount: 7000, date: new Date('2024-08-20'), category: 'Vânzări', status: 'Activ', responsible: 'Sofia Albu' },
    { id: 9, description: 'Buget Contabilitate', amount: 6000, date: new Date('2024-09-05'), category: 'Finanțe', status: 'Activ', responsible: 'Cristian Petrescu' },
    { id: 10, description: 'Buget Mentenanță', amount: 4000, date: new Date('2024-10-12'), category: 'Întreținere', status: 'Inactiv', responsible: 'Bianca Munteanu' },
  ];

  editBudget(id: number) {
    console.log(`Editează bugetul cu ID: ${id}`);
    // Logica pentru a edita bugetul
  }

  deleteBudget(id: number) {
    console.log(`Șterge bugetul cu ID: ${id}`);
    // Logica pentru a șterge bugetul
  }
}
