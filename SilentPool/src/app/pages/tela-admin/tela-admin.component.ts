import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';

interface Question{
  category: string
  question: string
  vote: number
  isDeleted: boolean
  isReplied: boolean
  workspace: string
  id: string
}

@Component({
  selector: 'app-tela-admin',
  templateUrl: './tela-admin.component.html',
  styleUrl: './tela-admin.component.css',
})
export class TelaAdminComponent implements OnInit {

  constructor( private questionService: QuestionService ) {}

  questions: Array<Question> = []

  ngOnInit(): void {
    this.questionService.getQuestions().subscribe(
     {
      next: question => this.questions = question
     }
    )
  }

}
