import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WordListComponent } from './word-list/word-list.component';
import { WordInfoComponent } from './word-info/word-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WordListComponent,
    WordInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
