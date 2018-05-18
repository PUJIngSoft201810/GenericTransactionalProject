import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEventoComponent } from './vista-evento.component';

describe('VistaEventoComponent', () => {
  let component: VistaEventoComponent;
  let fixture: ComponentFixture<VistaEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
