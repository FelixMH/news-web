import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { News } from '../interfaces/news.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor( private http: HttpClient ) { }

  getNews(): Observable<News> {
    const options = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Headers':'Origin, Content-Type, X-Auth-Token',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET, POST, PATCH, PUT, DELETE, OPTIONS'
      })
    };
    return this.http.get<News>('https://newsapi.org/v2/everything?q=bitcoin&apiKey=efe79552ec83456db6564c1ec305bad8', options);
  }
}
