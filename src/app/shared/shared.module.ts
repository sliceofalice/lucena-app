import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [NavBarComponent],
  exports: [NavBarComponent],
  imports: [CommonModule, TranslateModule]
})
export class SharedModule { }
