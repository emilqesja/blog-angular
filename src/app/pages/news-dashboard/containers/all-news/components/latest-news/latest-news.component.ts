import { Component, OnInit } from '@angular/core';
import { NewsData, NewsService } from '../../../../services/news.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss'],
})
export class LatestNewsComponent implements OnInit {
  constructor(private newsService: NewsService) {}

  newsData!: NewsData;

  latestNews!: any;

  ngOnInit(): void {
    this.getLatestNews();
  }

  // getNews() {
  //   this.newsService.getNews().subscribe({
  //     next: (res: NewsData) => {
  //       console.log('res', res);
  //       this.newsData = res;
  //     },
  //   });
  // }

  getLatestNews() {
    this.newsService.getLatestNews().subscribe({
      next: (res: any) => {
        console.log('R', res);
        this.latestNews = res;
        console.log(this.latestNews[1]);
      },
    });
  }
}
