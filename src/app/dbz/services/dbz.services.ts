import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';
import { Character } from '../interfaces/character.interface';

console.log(uuid())

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'krilin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9600,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7600,
    },
  ];
  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(Character => Character.id !== id);
  }

  addCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(), ...character
    };
    this.characters.push(newCharacter);
  }
}
