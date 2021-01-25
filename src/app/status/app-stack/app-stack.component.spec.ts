import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStackComponent } from './app-stack.component';

describe('AppStackComponent', () => {
  let component: AppStackComponent;
  let fixture: ComponentFixture<AppStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
