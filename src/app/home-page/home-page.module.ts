import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '../shared/shared.module';
import { HomePageComponent } from './home-page.component';
import { HomeProfileComponent } from './home-profile/home-profile.component';

@NgModule({
  declarations: [HomePageComponent, HomeProfileComponent],
  exports: [HomePageComponent],
  imports: [CommonModule, SharedModule, TranslateModule]
})
export class HomePageModule { }
