import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private router: Router) {

  }

  navigateTo(routeParam: string) {
    console.log('Navigheaza catre ruta: ', routeParam)
    this.router.navigateByUrl(routeParam)
  }
}
