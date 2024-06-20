import { withInterceptors } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-new',
  templateUrl: './home-new.component.html',
  styleUrl: './home-new.component.css'
})
export class HomeNewComponent {
  public exibir: boolean = false;
  public corFundo: string = "white";
}
