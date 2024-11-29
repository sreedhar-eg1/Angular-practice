import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectPracticeComponent } from './subject-practice.component';

describe('SubjectPracticeComponent', () => {
  let component: SubjectPracticeComponent;
  let fixture: ComponentFixture<SubjectPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectPracticeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
