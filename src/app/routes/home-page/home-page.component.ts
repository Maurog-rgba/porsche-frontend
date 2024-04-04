import { Component } from '@angular/core';
import { ContentCardComponent } from '../../shared/components/content-card/content-card.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { ModelsCardComponent } from '../../shared/components/models-card/models-card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    ContentCardComponent,
    ModelsCardComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
