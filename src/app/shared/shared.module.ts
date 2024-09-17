import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { NavBarModule } from './nav-bar/nav-bar.module';

@NgModule({
  exports: [NavBarModule],
  imports: [CommonModule, TranslateModule]
})
export class SharedModule { }
