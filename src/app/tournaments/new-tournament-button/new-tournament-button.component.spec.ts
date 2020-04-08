import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTournamentButtonComponent } from './new-tournament-button.component';

describe('NewTournamentButtonComponent', () => {
  let component: NewTournamentButtonComponent;
  let fixture: ComponentFixture<NewTournamentButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTournamentButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTournamentButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
