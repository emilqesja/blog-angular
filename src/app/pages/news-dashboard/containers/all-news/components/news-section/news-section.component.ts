import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../../services/news.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.scss'],
})
export class NewsSectionComponent implements OnInit {
  businessNews$ = this.newsService
    .getNewsType({ type: 'Business', limit: 4, sort: 'date', order: 'desc' })
    .pipe(take(1));

  techNews$ = this.newsService
    .getNewsType({ type: 'Tech', limit: 4, sort: 'date', order: 'desc' })
    .pipe(take(1));

  lifeNews$ = this.newsService
    .getNewsType({ type: 'Life', limit: 4, sort: 'date', order: 'desc' })
    .pipe(take(1));

  constructor(public newsService: NewsService) {}

  ngOnInit(): void {}
}
