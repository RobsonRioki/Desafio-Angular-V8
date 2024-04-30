import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../shared/modal/modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  codigo = '';

  constructor(public dialog: MatDialog, private router: Router) {}

  entrarSala(){

    this.router.navigate(['/perguntas', this.codigo])
  }

  openDialog() {
    this.dialog.open(ModalComponent);
  }
}
