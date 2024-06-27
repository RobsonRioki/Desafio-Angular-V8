import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../../../shared/modal/modal.component';

@Component({
  selector: 'app-home3-template',
  templateUrl: './home3-template.component.html',
  styleUrls: ['./home3-template.component.css']
})
export class Home3TemplateComponent {

  @Output() modal: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(
    public dialog: MatDialog,
  ) {}


  openDialog() {
    //  this.dialog.open(ModalComponent);
    this.modal.emit(true)
  }

  

}
