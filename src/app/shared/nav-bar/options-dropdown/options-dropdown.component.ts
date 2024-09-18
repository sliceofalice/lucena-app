import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-options-dropdown',
  templateUrl: './options-dropdown.component.html',
  styleUrl: './options-dropdown.component.scss'
})
export class OptionsDropdownComponent {
  @Input({ required : true }) type!: 'home' | 'language';
  @Output() languageOptionEvent = new EventEmitter<string>();
  @Output() homeOptionEvent = new EventEmitter<string>();
  languages = ['English', 'Portuguese'];

  get typeClass() : string {
    return `options-dropdown-default ${this.type}`;
  }

  emitLanguageEvent(language: string): void {
    this.languageOptionEvent.emit(language);
  }

  emitHomeEvent(): void {
    this.homeOptionEvent.emit('Home');
  }
}
