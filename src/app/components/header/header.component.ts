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
  constructor(private translate: TranslateService) {}
  toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
  }
  switchLanguage(event: Event) {
    const selectedLang = (event.target as HTMLSelectElement).value;
    this.translate.use(selectedLang);
  }
}
