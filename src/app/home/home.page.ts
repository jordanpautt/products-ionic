import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectCategory: string = '';
  constructor() { }

  handleSelect(e): void {
    this.selectCategory = e.target.value;
  }
}
