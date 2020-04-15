import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLeagueButtonComponent } from './new-league-button.component';

describe('NewLeagueButtonComponent', () => {
  let component: NewLeagueButtonComponent;
  let fixture: ComponentFixture<NewLeagueButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLeagueButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLeagueButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
