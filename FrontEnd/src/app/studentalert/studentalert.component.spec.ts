import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentalertComponent } from './studentalert.component';

describe('StudentalertComponent', () => {
  let component: StudentalertComponent;
  let fixture: ComponentFixture<StudentalertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentalertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
