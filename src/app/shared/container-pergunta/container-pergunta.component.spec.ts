import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ContainerPerguntaComponent } from "./container-pergunta.component"
import { EventEmitter } from "@angular/core";

describe('#ContainerPerguntaComponent', ()=> {
let component: ContainerPerguntaComponent;
let fixture: ComponentFixture<ContainerPerguntaComponent>;
let element: HTMLElement;

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [ContainerPerguntaComponent],
  });
  fixture = TestBed.createComponent(ContainerPerguntaComponent);
  component = fixture.componentInstance;
  element = fixture.nativeElement;
});

it('should create component', () => {
  expect(component).toBeTruthy();
});

it('should get a true value', () =>{
  component.isAdmin = true;
  expect(component.isAdmin).toBe(true);
})



})