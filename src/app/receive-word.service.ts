import { Injectable } from '@angular/core';
import { Word } from './Word';
import { WORDS } from './words' 

@Injectable({
  providedIn: 'root'
})
export class ReceiveWordService {

  constructor() { }

  getWords(): Word[] {
      return WORDS;
  }

}
