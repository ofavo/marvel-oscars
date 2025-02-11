import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Character } from '../interfaces/marvel.interface';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private selectedCharacter = new BehaviorSubject<Character | null>(null);
  selectedCharacter$ = this.selectedCharacter.asObservable();

  setSelectedCharacter(character: Character) {
    this.selectedCharacter.next(character);
  }
}
