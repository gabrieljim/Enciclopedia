import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { WordListComponent } from './word-list/word-list.component';
import { WordInfoComponent } from './word-info/word-info.component';

import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Enciclopedia';

  public selected;

  wordClicked(obj) {
    this.selected = obj;
    console.log(obj)
  }

}
