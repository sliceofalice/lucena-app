import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar-logo',
  templateUrl: './nav-bar-logo.component.html',
  styleUrl: './nav-bar-logo.component.scss'
})
export class NavBarLogoComponent {
  @Input({ required : true }) profile!: string;

  get profileClass() : string {
    return `profile-default ${this.profile.toLowerCase()}`;
  }
}
