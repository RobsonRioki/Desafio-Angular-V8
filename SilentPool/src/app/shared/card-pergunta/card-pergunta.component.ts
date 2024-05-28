import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-card-pergunta',
  templateUrl: './card-pergunta.component.html',
  styleUrl: './card-pergunta.component.css'
})
export class CardPerguntaComponent {
  @Input() question: any;
  @Input() questions!: any[];
  @Output() likeClicked = new EventEmitter<string>();

  onLikeClick(id: string) {
    this.likeClicked.emit(id);
  }

}
