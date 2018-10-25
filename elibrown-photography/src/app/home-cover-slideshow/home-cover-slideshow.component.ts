import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-cover-slideshow',
  templateUrl: './home-cover-slideshow.component.html',
  styleUrls: ['./home-cover-slideshow.component.css']
})
export class HomeCoverSlideshowComponent implements OnInit {

   imageUrls = [
    { url: './assets/imgs/macro/macro.jpg', caption: 'Macro' },
    { url: './assets/imgs/landscapes/20170701_182413-1.jpg', caption: 'Landscape' },
	{ url: './assets/imgs/portraits/avi.jpg', caption: 'Portrait' },
    { url: './assets/imgs/food/food.jpg', caption: 'Food' },
    { url: './assets/imgs/animals/4165.jpg', caption: 'Animals' },
    ];
  height: string = '650px';
  minHeight: string;
  arrowSize: string = '30px';
  showArrows: boolean = false;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 3333; 
  stopAutoPlayOnSlide: boolean = false;
  debug: boolean = true;
  backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = false;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = false;
  width: string = '100%';

  constructor() { }

  ngOnInit() {
  }

}
