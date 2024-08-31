import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { NavBarAlternativeComponent } from "./nav-bar-alternative/nav-bar-alternative.component";
import { HomePageComponent } from "./home-page/home-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, NavBarAlternativeComponent, HomePageComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lucena-app';
}
