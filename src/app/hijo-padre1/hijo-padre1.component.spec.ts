import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoPadre1Component } from './hijo-padre1.component';

describe('HijoPadre1Component', () => {
  let component: HijoPadre1Component;
  let fixture: ComponentFixture<HijoPadre1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoPadre1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoPadre1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
