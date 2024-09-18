import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-options-dropdown',
  templateUrl: './options-dropdown.component.html',
  styleUrl: './options-dropdown.component.scss'
})
export class OptionsDropdownComponent {
  @Input() type?: string;
  @Output() languageOptionEvent = new EventEmitter<string>();
  languages = ['English', 'Portuguese'];

  get typeClass() : string {
    return this.type ? `options-dropdown-default ${this.type}` : 'options-dropdown-default';
  }

  emitEvent(language: string): void {
    this.languageOptionEvent.emit(language);
  }
}
