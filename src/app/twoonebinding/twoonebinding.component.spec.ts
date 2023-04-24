import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoonebindingComponent } from './twoonebinding.component';

describe('TwoonebindingComponent', () => {
  let component: TwoonebindingComponent;
  let fixture: ComponentFixture<TwoonebindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoonebindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoonebindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
