import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  logo: 'desktop' | 'mobile' = 'mobile';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.logo = window.innerWidth <= 768 ? 'mobile' : 'desktop';
  }
}
