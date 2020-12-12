import { Component } from '@angular/core';
import arrayWords from '../utils/words';
import country_name from '../utils/country_name';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'word-genrator';

  words: string = '';
  limit = 10;

  handelSlideChange(newLimit: number) {
    this.limit = newLimit;
  }

  generate() {
    this.words = arrayWords.slice(0, this.limit).join(' ');
  }
  generat_country() {
    this.words = country_name.slice(0, this.limit).join(' ');
  }
}
