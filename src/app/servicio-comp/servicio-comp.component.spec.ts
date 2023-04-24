import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioCompComponent } from './servicio-comp.component';

describe('ServicioCompComponent', () => {
  let component: ServicioCompComponent;
  let fixture: ComponentFixture<ServicioCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
