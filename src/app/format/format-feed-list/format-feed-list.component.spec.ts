import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatFeedListComponent } from './format-feed-list.component';

describe('FeedListComponent', () => {
  let component: FormatFeedListComponent;
  let fixture: ComponentFixture<FormatFeedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatFeedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatFeedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
