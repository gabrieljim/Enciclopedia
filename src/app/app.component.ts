import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Enciclopedia';

  public selectedWord;
  public selectedLetter;

  wordClicked(obj) {
    this.selectedWord = obj;
    //console.log(obj)
  }
  letterClicked(obj) {
    this.selectedLetter = obj;
    //console.log(obj)
  }

}
