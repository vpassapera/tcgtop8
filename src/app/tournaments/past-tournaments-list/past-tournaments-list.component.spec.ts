import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastTournamentsListComponent } from './past-tournaments-list.component';

describe('PastTournamentsListComponent', () => {
  let component: PastTournamentsListComponent;
  let fixture: ComponentFixture<PastTournamentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastTournamentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastTournamentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
