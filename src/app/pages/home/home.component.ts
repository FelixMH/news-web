import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Article } from '../../interfaces/news.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articles: Article[] = [];

  constructor( private news: NewsService ) { }

  ngOnInit() {
    return this.news.getNews()
      .subscribe( resp => {
        this.articles = resp.articles;
      })
  }

}
