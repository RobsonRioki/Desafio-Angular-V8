import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container-info',
  templateUrl: './container-info.component.html',
  styleUrl: './container-info.component.css'
})
export class ContainerInfoComponent {
  @Input() titulo: string = '';
  @Input() descricao: string = '';
  @Input() corFundo: string = "white"
}
