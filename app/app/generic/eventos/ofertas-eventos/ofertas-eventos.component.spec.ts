import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasEventosComponent } from './ofertas-eventos.component';

describe('OfertasEventosComponent', () => {
  let component: OfertasEventosComponent;
  let fixture: ComponentFixture<OfertasEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertasEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertasEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
