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
  codigo: string = '';
  constructor(private questionService: QuestionService, private dadosService: DadosService, private route: ActivatedRoute) { }

  questions: Array<Question> = []
  dados: Array<Dados> = []

  ngOnInit(): void {

    const codigo = this.route.snapshot.params['codigo']
    console.log(codigo)
    this.codigo = codigo


    this.dadosService.getDados().subscribe(
      {
        next: (dado) =>{ 
          this.dados = dado.filter((item:Dados)=>String(item.code) === codigo);
          console.log(dado) 
        }
      }
    )
    this.getPerguntas()
  }

  getPerguntas(){
    this.questionService.getQuestions().subscribe(
      {
        next: question => this.questions = question.filter((item : Question) => item.workspace === String(this.codigo))
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
      workspace: this.codigo
    };

    this.questionService.postQuestion(novaPergunta).subscribe({
      next: ()=>{
        console.log('Pergunta enviada com sucesso:');
        this.categoria = '';
        this.pergunta = '';
        this.getPerguntas();
      },
      error: (error) => {console.log(error)}
    })






     
  }
}
