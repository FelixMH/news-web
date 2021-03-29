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

  // Se envía el artículo del cual se clickeó y navega a la ruta { detail/:id } .
  // este ID es el de la fuente, ya que coincidia el mismo id para todos los articulos, se optó
  // por esta opción.
  onClick( art: Article ) {
    this.router.navigate( ['/detail', art.source.id] );
    console.log( art );
  }

}
