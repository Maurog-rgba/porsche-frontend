import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
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
