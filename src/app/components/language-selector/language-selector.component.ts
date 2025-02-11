import { Component, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-language-selector',
  template: `
    <ion-buttons>
      <ion-button (click)="toggleLanguage()">
        <ion-icon slot="icon-only" name="language-outline"></ion-icon>
      </ion-button>
    </ion-buttons>
  `,
  standalone: true,
  imports: [IonicModule]
})
export class LanguageSelectorComponent {
  private languageService = inject(LanguageService);
  currentLanguage$ = this.languageService.currentLanguage$;

  toggleLanguage() {
    this.currentLanguage$.subscribe(current => {
      this.languageService.setLanguage(current === 'en' ? 'es' : 'en');
    }).unsubscribe();
  }
}
