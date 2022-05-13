import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AllNewsComponent } from './containers/all-news/all-news.component';
import { LatestNewsComponent } from './containers/all-news/components/latest-news/latest-news.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsSectionComponent } from './containers/all-news/components/news-section/news-section.component';

const routes: Routes = [
  {
    path: '',
    children: [{ path: '', component: AllNewsComponent }],
  },
];

@NgModule({
  declarations: [AllNewsComponent, LatestNewsComponent, NewsSectionComponent],
  imports: [CommonModule, RouterModule.forChild(routes), HttpClientModule],
})
export class NewsDashboardModule {}
