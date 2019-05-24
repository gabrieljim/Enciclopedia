import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() letterClicked = new EventEmitter<any>();
  letters=["Todas","A","B","C","E","F","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  selectedLetter;
  constructor() { }

  ngOnInit() {
  }

  onSelect(letter): void{
    this.selectedLetter=letter;
    this.letterClicked.emit(letter);
  }
  

}
