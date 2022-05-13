import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_URL } from '../../../shared/api.token';
import { Observable, take } from 'rxjs';

interface NewsParams {
  sort: string;
  order: string;
  limit: number;
  type: string;
}

export interface NewsData {
  id: number;
  title: string;
  content: string;
  image: string;
  author: string;
  date: string;
  type: string;
}

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(@Inject(API_URL) private api: string, private http: HttpClient) {}

  getNewsType(params: Partial<NewsParams>): Observable<NewsData[]> {
    const path = `${this.api}/news`;
    return this.http.get<NewsData[]>(path, {
      params: this.getNewsHttpParams(params),
    });
  }

  getNewsHttpParams(params: Partial<NewsParams>): HttpParams {
    const { sort, order, limit, type } = params;
    let httpParams = new HttpParams();
    if (sort) {
      httpParams = httpParams.append('_sort', sort);
    }
    if (order) {
      httpParams = httpParams.append('_order', order);
    }

    if (limit) {
      httpParams = httpParams.append('_limit', limit);
    }

    if (type) {
      httpParams = httpParams.append('type', type);
    }
    return httpParams;
  }

  getLatestNews(): Observable<NewsData> {
    const path = `${this.api}/news?_sort=date&_order=desc&_page=1&_limit=2`;
    return this.http.get<NewsData>(path);
  }
}
