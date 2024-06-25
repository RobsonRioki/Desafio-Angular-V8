import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../../../shared/modal/modal.component'; 
import { ActivatedRoute, Router } from '@angular/router';
import { DadosService } from '../../../../services/dados.service'; 


interface Dados {
  createAt: number;
  name: string;
  code: number;
  participants: number;
  timeLeft: Date;
  id: string;
}

@Component({
  selector: 'app-home3-template',
  templateUrl: './home3-template.component.html',
  styleUrls: ['./home3-template.component.css']
})
export class Home3TemplateComponent {
  code = '';

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private dadosService: DadosService,
    private route: ActivatedRoute
  ) {}

  dados: Array<Dados> = [];

  ngOnInit(): void {
    this.code = this.route.snapshot.params['codigo'];

    this.dadosService.getDados().subscribe({
      next: (dado) => {
        this.dados = dado;
        console.log(this.dados);
      },
    });
  }

  onCodigoRecebido(event: { codigo: string }) {
    this.code = event.codigo;
    this.entrarSala();
  }

  entrarSala() {
    const codigoExistente = this.dados.find((item) => item.code.toString() === this.code);

    if (codigoExistente) {
      this.router.navigate(['/perguntas', this.code]);
    } else {
      alert('Código inválido. Por favor, insira um código válido.');
    }
  }

  openDialog() {
    this.dialog.open(ModalComponent);
  }
}
