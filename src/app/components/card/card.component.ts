import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Article } from '../../interfaces/news.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() articles : Article[];

  constructor( private router: Router ) { }

  ngOnInit(): void { }

  onClick( art: Article ) {
    this.router.navigate( ['/detail', art.source.id] );
    console.log( art );
  }

}
