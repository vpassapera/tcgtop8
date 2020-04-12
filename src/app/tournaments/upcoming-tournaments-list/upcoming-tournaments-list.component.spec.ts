import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingTournamentsListComponent } from './upcoming-tournaments-list.component';

describe('UpcomingListComponent', () => {
  let component: UpcomingTournamentsListComponent;
  let fixture: ComponentFixture<UpcomingTournamentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingTournamentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingTournamentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
