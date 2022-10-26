import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedstudentsComponent } from './approvedstudents.component';

describe('ApprovedstudentsComponent', () => {
  let component: ApprovedstudentsComponent;
  let fixture: ComponentFixture<ApprovedstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedstudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
