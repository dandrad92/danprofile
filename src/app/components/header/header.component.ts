import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  constructor(private translate: TranslateService) {}

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
  }

  switchLanguage(event: any) {
    // Implement language switching logic
    console.log('Language switched to:', event.target.value);
  }
}
