import { Component, Input } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Input() images: string[] = [];

  indexCurrentImage: number = 0;

  ngOnInit() {
    const intervalTime = 5000;
    timer(intervalTime, intervalTime).subscribe(() => {
      this.next();
    });
  }

  before() {
    if(this.indexCurrentImage == 0) {
      this.indexCurrentImage = this.images.length - 1;
    } else {
      this.indexCurrentImage--;
    }
  }

  next() {
    if(this.indexCurrentImage == this.images.length - 1) {
      this.indexCurrentImage = 0;
    } else {
      this.indexCurrentImage++;
    }
  }
}
