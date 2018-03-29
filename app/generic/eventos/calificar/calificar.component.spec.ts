import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificarComponent } from './calificar.component';

describe('CalificarComponent', () => {
  let component: CalificarComponent;
  let fixture: ComponentFixture<CalificarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
