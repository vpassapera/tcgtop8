import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalLatestTournamentsComponent } from './global-latest-tournaments.component';

describe('GlobalLatestTournamentsComponent', () => {
  let component: GlobalLatestTournamentsComponent;
  let fixture: ComponentFixture<GlobalLatestTournamentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalLatestTournamentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalLatestTournamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
