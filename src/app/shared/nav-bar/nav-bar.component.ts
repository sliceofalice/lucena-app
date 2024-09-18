import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  @Input() type?: string;
  @Input() languageClicked?: boolean;

  profiles = ['Alice', 'Ketlen', 'Walfredo'];
  languageDropdown = false;

  get navBarType() : string {
    return this.type ? `nav-bar-default ${this.type}` : 'nav-bar-default';
  }

  get languageClass() : string {
    return this.languageClicked ? 'language-default language-clicked poppins-light' : 'language-default poppins-light';
  }

  onClickLanguage() : void{
    this.languageClicked = !this.languageClicked;
    this.languageDropdown = !this.languageDropdown;
  }

  onClickLanguageOption(language: string) {
    console.log(language);
  }

}
