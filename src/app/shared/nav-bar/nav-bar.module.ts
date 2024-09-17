import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

import { NavBarComponent } from "./nav-bar.component";
import { NavBarLogoComponent } from "./nav-bar-logo/nav-bar-logo.component";

@NgModule({
  declarations: [NavBarComponent, NavBarLogoComponent],
  exports: [NavBarComponent],
  imports: [CommonModule, TranslateModule]
})
export class NavBarModule { }
