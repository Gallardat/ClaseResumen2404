import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreHijo1Component } from './padre-hijo1.component';

describe('PadreHijo1Component', () => {
  let component: PadreHijo1Component;
  let fixture: ComponentFixture<PadreHijo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadreHijo1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreHijo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
