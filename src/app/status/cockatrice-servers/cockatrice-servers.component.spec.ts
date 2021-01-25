import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CockatriceServersComponent } from './cockatrice-servers.component';

describe('CockatriceServersComponent', () => {
  let component: CockatriceServersComponent;
  let fixture: ComponentFixture<CockatriceServersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CockatriceServersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CockatriceServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
