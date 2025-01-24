import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;

    // Using let instead of const to avoid class member error
    const bodyContent = document.querySelector('.body-content');
    
    if (this.isMenuOpen) {
      bodyContent?.classList.add('with-navbar');
    } else {
      bodyContent?.classList.remove('with-navbar');
    }
  }


  
}
