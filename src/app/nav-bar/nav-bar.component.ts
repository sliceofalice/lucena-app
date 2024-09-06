import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar-main.component.scss', './nav-bar-alternative.component.scss']
})
export class NavBarComponent {
  @Input() navBarType: string = 'nav-bar-main';
}
