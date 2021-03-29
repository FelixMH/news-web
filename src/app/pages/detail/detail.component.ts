import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../interfaces/news.interface';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})


export class DetailComponent implements OnInit {

  @Input() articles: Article[];
  // article: Article;


  constructor( private ar: ActivatedRoute, private news: NewsService ) { }

  ngOnInit() {
    const id = this.ar.snapshot.params.id;
    return this.news.getNews()
      .subscribe( resp => {
        // Llegan los articulos
        this.articles = resp.articles;
      })
  }

}
