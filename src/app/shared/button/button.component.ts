import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() typeBtn: 'primary' | 'secondary' | 'tertiary' | 'cancelar' = 'primary';
  @Input() textBtn!: string;
  @Input() widthBtn: string = '100';

  @Output() click: EventEmitter<boolean> = new EventEmitter<boolean>()

  onClick(){
    this.click.emit(true)
  }
}
