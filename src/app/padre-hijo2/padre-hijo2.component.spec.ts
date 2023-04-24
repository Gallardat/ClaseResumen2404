import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreHijo2Component } from './padre-hijo2.component';

describe('PadreHijo2Component', () => {
  let component: PadreHijo2Component;
  let fixture: ComponentFixture<PadreHijo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadreHijo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreHijo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
