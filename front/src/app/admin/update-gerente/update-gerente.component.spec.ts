import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGerenteComponent } from './update-gerente.component';

describe('UpdateGerenteComponent', () => {
  let component: UpdateGerenteComponent;
  let fixture: ComponentFixture<UpdateGerenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateGerenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
