import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaeventosComponent } from './ofertaeventos.component';

describe('OfertaeventosComponent', () => {
  let component: OfertaeventosComponent;
  let fixture: ComponentFixture<OfertaeventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertaeventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaeventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
