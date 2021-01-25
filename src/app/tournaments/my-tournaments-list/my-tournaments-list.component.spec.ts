import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTournamentsListComponent } from './my-tournaments-list.component';

describe('MyTournamentsListComponent', () => {
  let component: MyTournamentsListComponent;
  let fixture: ComponentFixture<MyTournamentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTournamentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTournamentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
