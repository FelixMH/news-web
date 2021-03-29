import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { NewsSlideshowComponent } from './news-slideshow/news-slideshow.component';
import { CardComponent } from './card/card.component';
import { LimitToPipePipe } from './pipes/limit-to-pipe.pipe';
import { NewComponent } from './new/new.component';



@NgModule({
  declarations: [NavbarComponent, NewsSlideshowComponent, CardComponent, LimitToPipePipe, NewComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    NewsSlideshowComponent,
    CardComponent,
    NewComponent
  ]
})
export class ComponentsModule { }
