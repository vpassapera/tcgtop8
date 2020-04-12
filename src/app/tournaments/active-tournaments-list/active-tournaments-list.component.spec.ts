import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveTournamentsListComponent } from './active-tournaments-list.component';

describe('ActiveTournamentsListComponent', () => {
  let component: ActiveTournamentsListComponent;
  let fixture: ComponentFixture<ActiveTournamentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveTournamentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveTournamentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
