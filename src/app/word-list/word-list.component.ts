import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { Word } from '../Word';
import { WORDS } from '../words';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit {

  @Output() wordClicked = new EventEmitter<Word>();
    
  words = WORDS;
  selectedWord: Word;

  constructor() { }

  ngOnInit() {
  }

  onSelect(word: Word): void{
    this.selectedWord=word;
    this.wordClicked.emit(word);
  }
}
