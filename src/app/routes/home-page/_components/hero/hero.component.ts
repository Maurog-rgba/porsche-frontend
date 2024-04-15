import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  @ViewChild('Video') Video!: ElementRef<HTMLVideoElement>;

  isStopped = false;

  stopVideoPlayer() {
    this.isStopped = !this.isStopped;
    if (this.isStopped) {
      this.Video.nativeElement.pause();
    } else {
      this.Video.nativeElement.play();
    }
  }
}
