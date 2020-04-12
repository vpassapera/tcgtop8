import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalLatestWinnersComponent } from './global-latest-winners.component';

describe('GlobalLatestWinnersComponent', () => {
  let component: GlobalLatestWinnersComponent;
  let fixture: ComponentFixture<GlobalLatestWinnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalLatestWinnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalLatestWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
