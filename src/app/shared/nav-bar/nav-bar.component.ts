import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  @Input() navBarAlternative: boolean = false;

  constructor() { }

  get navBarType() : string {
    return this.navBarAlternative ? 'nav-bar-alternative' : 'nav-bar-main';
  }
}
