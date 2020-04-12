import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatMetaListComponent } from './format-meta-list.component';

describe('MetaListComponent', () => {
  let component: FormatMetaListComponent;
  let fixture: ComponentFixture<FormatMetaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatMetaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatMetaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
