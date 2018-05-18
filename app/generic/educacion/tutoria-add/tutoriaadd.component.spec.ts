import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoriaaddComponent } from './tutoriaadd.component';

describe('TutoriaaddComponent', () => {
  let component: TutoriaaddComponent;
  let fixture: ComponentFixture<TutoriaaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutoriaaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutoriaaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
