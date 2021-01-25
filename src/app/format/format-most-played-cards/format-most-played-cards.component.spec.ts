import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatMostPlayedCardsComponent } from './format-most-played-cards.component';

describe('MostPlayedCardsComponent', () => {
  let component: FormatMostPlayedCardsComponent;
  let fixture: ComponentFixture<FormatMostPlayedCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatMostPlayedCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatMostPlayedCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
