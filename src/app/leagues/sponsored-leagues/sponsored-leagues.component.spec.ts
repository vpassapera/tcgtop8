import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsoredLeaguesComponent } from './sponsored-leagues.component';

describe('SponsoredLeaguesComponent', () => {
  let component: SponsoredLeaguesComponent;
  let fixture: ComponentFixture<SponsoredLeaguesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsoredLeaguesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsoredLeaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
