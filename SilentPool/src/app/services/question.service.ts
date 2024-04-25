import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpClient: HttpClient) { }

  private baseURL = 'https://65f84d6bdf151452460f1162.mockapi.io/api/v1'

  getQuestions() {
    return this.httpClient.get<[]>(`${this.baseURL}/questions`)
  }

  // postQuestions(){}

  // deleteQuestions(){}  

}
