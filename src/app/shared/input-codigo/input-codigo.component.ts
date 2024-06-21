import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-codigo',
  templateUrl: './input-codigo.component.html',
  styleUrls: ['./input-codigo.component.css']
})
export class InputCodigoComponent {
  @Output() code = new EventEmitter<{codigo: string}>();

  codigo!: string;

  onEnviarCodigo() {
    this.code.emit({codigo: this.codigo});
    this.codigo = '';
  }
}
