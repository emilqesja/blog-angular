import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main/main.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TopbarComponent, MainComponent, FooterComponent],
  imports: [CommonModule, RouterModule, MatButtonModule],
  exports: [MainComponent],
})
export class LayoutModule {}
