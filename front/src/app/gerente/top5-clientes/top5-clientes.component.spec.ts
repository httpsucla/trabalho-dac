import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top5ClientesComponent } from './top5-clientes.component';

describe('Top5ClientesComponent', () => {
  let component: Top5ClientesComponent;
  let fixture: ComponentFixture<Top5ClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top5ClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Top5ClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
