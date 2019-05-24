import { Component, OnInit, Input } from '@angular/core';

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


}
