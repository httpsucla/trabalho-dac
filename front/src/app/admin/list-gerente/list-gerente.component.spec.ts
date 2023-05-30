import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGerenteComponent } from './list-gerente.component';

describe('ListGerenteComponent', () => {
  let component: ListGerenteComponent;
  let fixture: ComponentFixture<ListGerenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGerenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
