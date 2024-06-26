import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DadosService } from '../../../../services/dados.service';
import { ModalComponent } from '../../../../shared/modal/modal.component';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrl: './home3.component.css'
})

export class Home3Component {

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private dadosService: DadosService,
    private route: ActivatedRoute
  ) { }

  openDialog(value: boolean) {
    this.dialog.open(ModalComponent);
    console.log(value)
  }

}
