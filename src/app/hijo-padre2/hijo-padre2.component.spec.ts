import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoPadre2Component } from './hijo-padre2.component';

describe('HijoPadre2Component', () => {
  let component: HijoPadre2Component;
  let fixture: ComponentFixture<HijoPadre2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoPadre2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoPadre2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
