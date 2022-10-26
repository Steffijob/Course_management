import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentrequestComponent } from './studentrequest.component';

describe('StudentrequestComponent', () => {
  let component: StudentrequestComponent;
  let fixture: ComponentFixture<StudentrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
