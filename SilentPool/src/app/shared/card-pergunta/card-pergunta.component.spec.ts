import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPerguntaComponent } from './card-pergunta.component';

describe('CardPerguntaComponent', () => {
  let component: CardPerguntaComponent;
  let fixture: ComponentFixture<CardPerguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardPerguntaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPerguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
