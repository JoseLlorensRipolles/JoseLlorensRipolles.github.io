import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-image-header',
  templateUrl: './image-header.component.html',
  styleUrls: ['./image-header.component.scss']
})
export class ImageHeaderComponent implements OnInit {
  scrolled = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    const numb = window.scrollY;
    if (numb >= 50) {
      this.scrolled = 1;
    }
    else {
      this.scrolled = 0;
    }
  }

  constructor() { }

  ngOnInit(): void {

  }

}
