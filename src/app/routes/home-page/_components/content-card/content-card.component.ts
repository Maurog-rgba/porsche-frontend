import { Component } from '@angular/core';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss',
})
export class ContentCardComponent {
  contents = [
    {
      text: 'O novo Macan 100% elétrico',
      image: '../../../../assets/images/cars/Macan-Electric.avif',
    },
    {
      text: 'O novo Panamera',
      image: '../../../../assets/images/cars/G3-Turbo.avif',
    },
    {
      text: '718 Spyder RS',
      image: '../../../../assets/images/cars/718-Spyder-RS.avif',
    },
  ];
}
