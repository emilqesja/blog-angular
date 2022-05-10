import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main/main.component';
import {TopbarComponent} from "./topbar/topbar.component";

@NgModule({
  declarations: [TopbarComponent, MainComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [MainComponent],
})
export class LayoutModule {}
