import { Component } from '@angular/core';
import { ContentCardComponent } from './_components/content-card/content-card.component';
import { DiscoverComponent } from './_components/discover/discover.component';
import { FindCarFormComponent } from './_components/find-car-form/find-car-form.component';
import { FooterComponent } from './_components/footer/footer.component';
import { HeaderComponent } from './_components/header/header.component';
import { HeroComponent } from './_components/hero/hero.component';
import { ModelsCardComponent } from './_components/models-card/models-card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    ContentCardComponent,
    ModelsCardComponent,
    FindCarFormComponent,
    DiscoverComponent,
    FooterComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent { }
