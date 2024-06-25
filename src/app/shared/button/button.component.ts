import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DadosService } from '../../services/dados.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() typeBtn: 'primary' | 'secondary' | 'tertiary' | 'cancelar' = 'primary';
  @Input() textBtn!: string;
  @Input() widthBtn: string = '100';
}
