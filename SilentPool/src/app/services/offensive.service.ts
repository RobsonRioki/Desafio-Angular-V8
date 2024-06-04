import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Filter from 'bad-words';

@Injectable({
  providedIn: 'root',
})
export class OffensiveWordsService {
  private filter: Filter;
  private customBadWords: string[] = [];
  private variations: string[] = [];

  constructor(private http: HttpClient) {
    this.filter = new Filter();
    this.loadCustomBadWords();
  }

  private loadCustomBadWords() {
    this.http
      .get<Array<{ id: string; word: string }>>(
        'https://65f84d6bdf151452460f1162.mockapi.io/api/v1/words'
      )
      .subscribe((words) => {
        this.customBadWords = words.map((word) => word.word);
        this.variations = this.generateVariations(this.customBadWords);
        this.filter.addWords(...this.customBadWords, ...this.variations);
        console.log('palavras', this.customBadWords, this.variations);
      });
  }

  private generateVariations(words: string[]): string[] {
    const variations: string[] = [];
    words.forEach((word) => {
      variations.push(
        ...this.createFormVariations(word),
        ...this.createSubstitutionVariations(word)
      );
    });
    return variations;
  }

  private createFormVariations(word: string): string[] {
    return [
      `${word.slice(0, -1)}a`,
      `${word.slice(0, -1)}ão`,
      `${word.slice(0, -1)}s`,
      `${word.slice(0, -1)}as`,
      `${word.slice(0, -1)}ões`,
      `${word.slice(0, -1)}inhos`,
      `${word.slice(0, -1)}inha`,
      `${word.slice(0, -1)}inho`,
    ];
  }

  private createSubstitutionVariations(word: string): string[] {
    const substitutions: { [key: string]: string } = {
      a: '[a@]',
      e: '[e3]',
      i: '[i1!]',
      o: '[o0]',
      u: '[u]',
      s: '[s$]',
      b: '[b8]',
    };

    const regexStr = word
      .split('')
      .map((char) => substitutions[char.toLowerCase()] || char)
      .join('');
    return [regexStr];
  }

  public filterOffensiveWords(message: string): string {
    let filteredMessage = message;
    [...this.customBadWords, ...this.variations].forEach((word) => {
      const regex = new RegExp(word, 'gi');
      filteredMessage = filteredMessage.replace(regex, '******');
    });
    return filteredMessage;
  }

  public containsOffensiveWord(message: string): boolean {
    const cleanedMessage = this.filter.clean(message);
    return cleanedMessage !== message;
  }
}
