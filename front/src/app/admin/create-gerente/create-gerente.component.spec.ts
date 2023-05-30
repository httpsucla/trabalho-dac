import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGerenteComponent } from './create-gerente.component';

describe('CreateGerenteComponent', () => {
  let component: CreateGerenteComponent;
  let fixture: ComponentFixture<CreateGerenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGerenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
