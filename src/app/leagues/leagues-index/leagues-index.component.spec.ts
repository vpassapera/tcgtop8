import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaguesIndexComponent } from './leagues-index.component';

describe('LeaguesIndexComponent', () => {
  let component: LeaguesIndexComponent;
  let fixture: ComponentFixture<LeaguesIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaguesIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaguesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
