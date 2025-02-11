import { Component, OnInit, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { StateService } from '../services/state.service';
import { LanguageService } from '../services/language.service';
import { Character } from '../interfaces/marvel.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  private apiService = inject(ApiService);
  private stateService = inject(StateService);
  private languageService = inject(LanguageService);
  private router = inject(Router);
  
  characters: Character[] = [];
  loading: boolean = false;
  error: string | null = null;
  labels = this.languageService.getTranslations();

  constructor() {
    this.languageService.currentLanguage$.subscribe(() => {
      this.labels = this.languageService.getTranslations();
    });
  }

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters() {
    this.loading = true;
    this.error = null;
    
    this.apiService.getCharacters().subscribe({
      next: (response) => {
        this.characters = response.data.results;
        this.loading = false;
      },
      error: (error) => {
        this.error = this.labels.home.errorLoading;
        this.loading = false;
      }
    });
  }

  refresh(ev: any) {
    this.loadCharacters();
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 1500);
  }

  selectCharacter(character: Character) {
    this.stateService.setSelectedCharacter(character);
    this.router.navigate(['/detail', character.id]);
  }
}
