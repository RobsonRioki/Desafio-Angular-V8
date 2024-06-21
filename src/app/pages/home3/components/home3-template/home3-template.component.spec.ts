import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home3TemplateComponent } from './home3-template.component';

describe('Home3TemplateComponent', () => {
  let component: Home3TemplateComponent;
  let fixture: ComponentFixture<Home3TemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Home3TemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Home3TemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
