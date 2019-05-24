import { Component, OnInit, EventEmitter, Output, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Word } from '../Word';
import { WORDS } from '../words';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit {

  @Input() selectedLetter;
  @Output() wordClicked = new EventEmitter<Word>();
  words = WORDS;
  selectedWord: Word;
  filteredWords: Word[];

  constructor() { }

  ngOnInit() {
     this.filteredWords = this.words;
  }

  onSelect(word: Word): void{
    this.selectedWord=word;
    this.wordClicked.emit(word);
  }

  filterOut(words: Word[]): void{
    if (this.selectedLetter == "Todas"){
      this.filteredWords=this.words;
    }
    else { 
      this.filteredWords=[];
      for (var i in words) {
        if (words[i].name[0] == this.selectedLetter) {
          this.filteredWords.push(words[i]); 
        }
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
      this.filterOut(this.words);
  }
}
