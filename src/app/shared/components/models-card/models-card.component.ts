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
      image: '../../../../assets/images/cars/718.avif',
    },
    {
      name: '911',
      description:
        'Icônico carro esportivo com motor montado na traseira e desempenho superior.',
      image: '../../../../assets/images/cars/911.avif',
    },
    {
      name: 'Taycan',
      description:
        'Sedan esportivo totalmente elétrico com porta-malas dianteiro e traseiro.',
      image: '../../../../assets/images/cars/taycan.avif',
    },
    {
      name: 'Panamera',
      description: 'Sedan esportivo de luxo com quatro lugares.',
      image: '../../../../assets/images/cars/panamera.avif',
    },
    {
      name: 'Macan',
      description: 'SUV compacto com alta versatilidade.',
      image: '../../../../assets/images/cars/macan.avif',
    },
    {
      name: 'Cayenne',
      description:
        'SUV com até 5 assentos, mas antes de tudo, um carro esportivo.',
      image: '../../../../assets/images/cars/Cayenne.avif',
    },
  ];
}
