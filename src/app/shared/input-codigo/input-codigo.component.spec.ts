import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCodigoComponent } from './input-codigo.component';

describe('InputCodigoComponent', () => {
  let component: InputCodigoComponent;
  let fixture: ComponentFixture<InputCodigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputCodigoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputCodigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
