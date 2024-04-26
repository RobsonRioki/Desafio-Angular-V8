import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { DadosService } from '../../services/dados.service';

interface Question{
  category: string
  question: string
  vote: number
  isDeleted: boolean
  isReplied: boolean
  workspace: string
  id: string
}

interface Dados{
  createAt: number
  name: string
  code: number
  participants: number
  timeLeft: Date
  id: string
}

@Component({
  selector: 'app-tela-admin',
  templateUrl: './tela-admin.component.html',
  styleUrl: './tela-admin.component.css',
})
export class TelaAdminComponent implements OnInit {

  novaSala: Dados | null = null ;
  mostrarNovaSala: boolean = false;

  constructor( private questionService: QuestionService, private  dadosService: DadosService) {}

  questions: Array<Question> = []
  dados: Array<Dados> = []

  ngOnInit(): void {
    this.questionService.getQuestions().subscribe(
     {
      next: question => this.questions = question
     }
    )
    this.dadosService.getDados().subscribe(
      {
        next: dado => {
          this.dados = dado;
          this.novaSala = this.dados[this.dados.length - 1];
          this.mostrarNovaSala = true;
        }
      }
    )
  }
  




}
