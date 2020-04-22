import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentFormHelperComponent } from './tournament-form-helper.component';

describe('TournamentFormHelperComponent', () => {
  let component: TournamentFormHelperComponent;
  let fixture: ComponentFixture<TournamentFormHelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentFormHelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentFormHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
