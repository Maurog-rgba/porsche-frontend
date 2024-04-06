import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {
  option: 1 | 2 | 3 | 4 | 5 = 1;

  changeOption(option: 1 | 2 | 3 | 4 | 5) {
    this.option = option;
  }
}
