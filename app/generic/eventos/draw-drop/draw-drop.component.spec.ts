import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawDropComponent } from './draw-drop.component';

describe('DrawDropComponent', () => {
  let component: DrawDropComponent;
  let fixture: ComponentFixture<DrawDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
