import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaViewComponent } from './zona-view.component';

describe('ZonaViewComponent', () => {
  let component: ZonaViewComponent;
  let fixture: ComponentFixture<ZonaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
