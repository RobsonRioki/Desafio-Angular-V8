import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html',
  styleUrl: './imagem.component.css'
})
export class ImagemComponent {
  @Input() src!: string;
  @Input() alt!: string;
  @Input() type!: string;
}
