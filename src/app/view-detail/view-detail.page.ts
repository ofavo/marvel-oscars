import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../interfaces/marvel.interface';
import { StateService } from '../services/state.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.page.html',
  styleUrls: ['./view-detail.page.scss'],
  standalone: false
})
export class ViewDetailPage implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private stateService = inject(StateService);
  private languageService = inject(LanguageService);
  
  character: Character | null = null;
  selectedSegment: 'comics' | 'series' | 'stories' = 'comics';
  labels = this.languageService.getTranslations();

  constructor() {
    this.languageService.currentLanguage$.subscribe(() => {
      this.labels = this.languageService.getTranslations();
    });
  }

  ngOnInit() {
    this.stateService.selectedCharacter$.subscribe(character => {
      this.character = character;
    });
  }

  getBackButtonText() {
    const isIos = window.navigator.userAgent.includes('iPhone');
    return isIos ? 'Back' : '';
  }

  trackComic(index: number, item: any) {
    return item.resourceURI;
  }

  trackSeries(index: number, item: any) {
    return item.resourceURI;
  }

  trackStory(index: number, item: any) {
    return item.resourceURI;
  }
}
