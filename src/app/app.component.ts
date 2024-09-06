import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

<<<<<<< HEAD
=======
import { NavBarComponent } from "./nav-bar/nav-bar.component";
>>>>>>> 978c3e3fd30c1d49975a18e46619510606a9e8af
import { HomePageComponent } from "./home-page/home-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, HomePageComponent],
=======
  imports: [RouterOutlet, NavBarComponent, HomePageComponent,],
>>>>>>> 978c3e3fd30c1d49975a18e46619510606a9e8af
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lucena-app';
}
