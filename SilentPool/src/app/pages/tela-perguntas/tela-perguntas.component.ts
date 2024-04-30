import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { DadosService } from '../../services/dados.service';
import { ActivatedRoute } from '@angular/router';


interface Question {
  category: string
  question: string
  vote: number
  isDeleted: boolean
  isReplied: boolean
  workspace: string
  id: string
}


interface Dados {
  createAt: number
  name: string
  code: number
  participants: number
  timeLeft: Date
  id: string
}

@Component({
  selector: 'app-tela-perguntas',
  templateUrl: './tela-perguntas.component.html',
  styleUrl: './tela-perguntas.component.css'
})
export class TelaPerguntasComponent implements OnInit {
  categoria: string = '';
  pergunta: string = '';

  constructor(private questionService: QuestionService, private dadosService: DadosService, private route: ActivatedRoute) { }

  questions: Array<Question> = []
  dados: Array<Dados> = []

  ngOnInit(): void {

    const codigo = this.route.snapshot.params['codigo']
    console.log(codigo)

    this.questionService.getQuestions().subscribe(
      {
        next: question => this.questions = question
      }
    )
    this.dadosService.getDados(codigo).subscribe(
      {
        next: dado => this.dados = dado
      }
    )
  }

  inserirPergunta(): void {
    const novaPergunta = {
      category: this.categoria,
      question: this.pergunta,
      vote: 0,
      isDeleted: false,
      isReplied: false,
      workspace: name,
      id: ''
    };

    this.questionService.postQuestion(novaPergunta).subscribe(
      response => {
        console.log('Pergunta enviada com sucesso:', response);
        this.categoria = '';
        this.pergunta = '';
      },
      error => {
        console.error('Erro ao enviar pergunta:', error);
      }
    );
  }
}
