import { Component } from '@angular/core';

@Component({
  selector: 'app-models-card',
  standalone: true,
  imports: [],
  templateUrl: './models-card.component.html',
  styleUrl: './models-card.component.scss',
})
export class ModelsCardComponent {
  models = [
    {
      name: '718',
      description:
        'Dois lugares com alta dinâmica de condução graças ao seu motor central.',
      image: 'https://placehold.co/600x400/000000/FFFFFF/png',
    },
    {
      name: '911',
      description:
        'Icônico carro esportivo com motor montado na traseira e desempenho superior.',
      image: 'https://placehold.co/600x400/000000/FFFFFF/png',
    },
    {
      name: 'Taycan',
      description:
        'Sedan esportivo totalmente elétrico com porta-malas dianteiro e traseiro.',
    },
    {
      name: 'Panamera',
      description: 'Sedan esportivo de luxo com quatro lugares.',
      image: 'https://placehold.co/600x400/000000/FFFFFF/png',
    },
    {
      name: 'Macan',
      description: 'SUV compacto com alta versatilidade.',
      image: 'https://placehold.co/600x400/000000/FFFFFF/png',
    },
    {
      name: 'Cayenne',
      description:
        'SUV com até 5 assentos, mas antes de tudo, um carro esportivo.',
      image: 'https://placehold.co/600x400/000000/FFFFFF/png',
    },
  ];
}
