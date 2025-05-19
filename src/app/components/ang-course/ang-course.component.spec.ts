import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngCourseComponent } from './ang-course.component';

describe('AngCourseComponent', () => {
  let component: AngCourseComponent;
  let fixture: ComponentFixture<AngCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
