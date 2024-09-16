import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-profile',
  templateUrl: './home-profile.component.html',
  styleUrl: './home-profile.component.scss'
})
export class HomeProfileComponent {
  @Input({ required : true }) profile!: string;

  get profileClass() : string {
    return `profile-${this.profile.toLowerCase()}`;
  }

}
