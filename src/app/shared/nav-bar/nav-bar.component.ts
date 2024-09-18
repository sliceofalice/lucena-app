import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  @Input() type?: string;
  @Input() logoClicked?: boolean;
  @Input() languageClicked?: boolean;

  profiles = ['Alice', 'Ketlen', 'Walfredo'];
  homeDropdown = false;
  languageDropdown = false;

  get navBarType() : string {
    return this.type ? `nav-bar-default ${this.type}` : 'nav-bar-default';
  }

  get languageClass() : string {
    return this.languageClicked ? 'language-default language-clicked poppins-light' : 'language-default poppins-light';
  }

  get homeClass() : string {
    return this.logoClicked ? 'home-default home-clicked poppins-light' : 'home-default poppins-light';
  }

  get titleClass() : string {
    return this.logoClicked ? 'title-default title-clicked poppins-bold' : 'title-default poppins-bold';
  }

  onClickLanguage() : void{
    this.languageClicked = !this.languageClicked;
    this.languageDropdown = !this.languageDropdown;
  }

  onClickLanguageOption(language: string) {
    console.log(language);
  }

  onClickHome() {
    this.logoClicked = !this.logoClicked;
    this.homeDropdown = !this.homeDropdown;
  }

  onClickHomeOption() {
    console.log('Home');
  }

}
