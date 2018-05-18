import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscenarioViewComponent } from './escenario-view.component';

describe('EscenarioViewComponent', () => {
  let component: EscenarioViewComponent;
  let fixture: ComponentFixture<EscenarioViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscenarioViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscenarioViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
