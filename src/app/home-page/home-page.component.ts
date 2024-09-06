import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
}
