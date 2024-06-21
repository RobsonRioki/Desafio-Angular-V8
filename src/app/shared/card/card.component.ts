import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() titulo: string = '';
  @Input() descricao: string = '';
  @Input() src!: string;
  @Input() alt!: string;
  @Input() type!: string;
}
