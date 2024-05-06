import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { DadosService } from '../../services/dados.service';
import { ActivatedRoute, Router } from '@angular/router';

interface Question {
  category: string;
  question: string;
  vote: number;
  isDeleted: boolean;
  isReplied: boolean;
  workspace: string;
  id: string;
}

interface Dados {
  createAt: number;
  name: string;
  code: number;
  participants: number;
  timeLeft: Date;
  id: string;
}

@Component({
  selector: 'app-tela-admin',
  templateUrl: './tela-admin.component.html',
  styleUrls: ['./tela-admin.component.css'],
})
export class TelaAdminComponent implements OnInit {
  categoria: string = '';
  pergunta: string = '';
  code: string = '';
  id: string = '';

  constructor(
    private questionService: QuestionService,
    private dadosService: DadosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  questions: Array<Question> = [];
  dados: Array<Dados> = [];

  ngOnInit(): void {
    const codigo = this.route.snapshot.params['codigo'];
    console.log(this.code);
    this.code = codigo;

    this.dadosService.getDados().subscribe({
      next: (dado) => {
        this.dados = dado.filter(
          (item: Dados) => String(item.code) === codigo
        );
        console.log(dado);
      },
    });

    this.getPerguntas(); 


    setInterval(() => this.getPerguntas(), 5000);
  }

  getPerguntas() {
    this.questionService.getQuestions().subscribe({
      next: (questions) => {
        this.questions = questions.filter(
          (item: Question) => item.workspace === String(this.code)
        );
        this.sortQuestionsByVote(); 
      },
    });
  }

  like(id: string) {
    const questionToUpdate = this.questions.find(
      (item: Question) => item.id === id
    );
    if (questionToUpdate) {
      questionToUpdate.vote++;
      this.questionService.updateQuestion(questionToUpdate).subscribe({
        next: () => {
          console.log('Voto atualizado com sucesso!');
        },
      });
    }
  }

  atualizar() {
   
    this.dadosService.getDados().subscribe({
      next: (dado) => {
        this.dados = dado.filter(
          (item: Dados) => String(item.code) === this.code
        );
      },
    });

    
    this.getPerguntas();
  }

  sortQuestionsByVote() {
    
    this.questions.sort((a, b) => b.vote - a.vote);
  }
}
