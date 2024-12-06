import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeAllOperatorComponent } from './merge-all-operator.component';

describe('MergeAllOperatorComponent', () => {
  let component: MergeAllOperatorComponent;
  let fixture: ComponentFixture<MergeAllOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MergeAllOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MergeAllOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
