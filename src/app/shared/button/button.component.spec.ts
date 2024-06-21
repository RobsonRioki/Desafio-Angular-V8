import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { DadosService } from '../../services/dados.service';

describe('#ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    });
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should get a valid type for button', () => {
    component.typeBtn = 'primary';
    component.textBtn = 'OK';
    expect(component.typeBtn).toBe('primary');
  });

  it('should get a class to be equal type button', () => {
    component.typeBtn = 'secondary';
    component.textBtn = 'OK';
    fixture.detectChanges();
    expect(element.querySelector('.secondary')).toBeTruthy();
  });

  it('should get a value button', () => {
    component.textBtn = 'OK';
    fixture.detectChanges();
    expect(element.querySelector('button')?.textContent).toContain('OK');
  });

  it('should get error when value button is empty', () => {
    component.textBtn = '';
    fixture.detectChanges();
    expect(element.querySelector('button')).toBeFalsy();
  });
});
