import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { language } from '../../assets/language/language';
import { Platform } from '@ionic/angular';
import { Device } from '@capacitor/device';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage = new BehaviorSubject<'es' | 'en'>('en');
  currentLanguage$ = this.currentLanguage.asObservable();

  constructor(private platform: Platform) {
    this.initializeLanguage();
  }

  private async initializeLanguage() {
    try {
      // 1. Primero intentar obtener el idioma guardado
      const savedLanguage = localStorage.getItem('preferred_language');
      if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
        this.currentLanguage.next(savedLanguage);
        return;
      }

      // 2. Si no hay idioma guardado, detectar el idioma del sistema
      let deviceLanguage: string | undefined;

      // Si estamos en Capacitor (iOS/Android), intentar obtener el idioma del dispositivo
      if (this.platform.is('capacitor')) {
        const languageCode = await Device.getLanguageCode();
        deviceLanguage = languageCode.value.toLowerCase().split('-')[0];
      } 
      // Si no, intentar obtener el idioma del navegador
      else if (navigator.language) {
        deviceLanguage = navigator.language.toLowerCase().split('-')[0];
      }

      // 3. Asignar el idioma detectado si está soportado, si no, usar inglés por defecto
      if (deviceLanguage && (deviceLanguage === 'es' || deviceLanguage === 'en')) {
        this.setLanguage(deviceLanguage);
      } else {
        this.setLanguage('en');
      }
    } catch (error) {
      console.error('Error detecting language:', error);
      this.setLanguage('en'); // Usar inglés como fallback
    }
  }

  setLanguage(lang: 'es' | 'en') {
    localStorage.setItem('preferred_language', lang);
    this.currentLanguage.next(lang);
  }

  getTranslations() {
    return language[this.currentLanguage.value];
  }
}
