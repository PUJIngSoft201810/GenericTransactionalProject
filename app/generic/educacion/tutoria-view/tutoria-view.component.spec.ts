import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoriaViewComponent } from './tutoria-view.component';

describe('TutoriaViewComponent', () => {
  let component: TutoriaViewComponent;
  let fixture: ComponentFixture<TutoriaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutoriaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutoriaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
