import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

import Swiper from 'swiper';

import { Article } from '../../interfaces/news.interface';

@Component({
  selector: 'app-news-slideshow',
  templateUrl: './news-slideshow.component.html',
  styleUrls: ['./news-slideshow.component.scss']
})
export class NewsSlideshowComponent implements OnInit, AfterViewInit {

  @Input() articles : Article[];

  swiper: Swiper;

  constructor() { }

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper-container', {
      loop: true,
    });



  }

  ngOnInit(): void {
    // console.log( this.articles );
  }

  onSlideNext() {
    this.swiper.slideNext();
  }

  onSlidePrev() {
    this.swiper.slidePrev();
  }


}
