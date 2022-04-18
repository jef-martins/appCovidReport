import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerosGlobaisComponent } from './numeros-globais.component';

describe('NumerosGlobaisComponent', () => {
  let component: NumerosGlobaisComponent;
  let fixture: ComponentFixture<NumerosGlobaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumerosGlobaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumerosGlobaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
