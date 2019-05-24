import { Component, OnInit, Input } from '@angular/core';
import { Word } from '../Word';
import { WORDS } from '../words';

@Component({
  selector: 'app-word-info',
  templateUrl: './word-info.component.html',
  styleUrls: ['./word-info.component.css']
})
export class WordInfoComponent implements OnInit {
  @Input() selectedWord;
  
  constructor() { }

  ngOnInit() {
  }


  onSelect(word: String): void{
      for (var i in WORDS) {
          if (WORDS[i].name === word){
              this.selectedWord = WORDS[i];
              break;
          }
      }
  }
}
