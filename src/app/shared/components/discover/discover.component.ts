import { Component } from '@angular/core';

@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.scss',
})
export class DiscoverComponent {
  contents = [
    {
      text: 'E-Performance',
      image: '../../../../assets/images/cars/Performance.avif',
    },
    {
      text: 'Techquipement Sound & Design',
      image: '../../../../assets/images/cars/Tequipment.avif',
    },
    {
      text: 'Porsche Finder',
      image: '../../../../assets/images/cars/Finder.avif',
    },
  ];
}
