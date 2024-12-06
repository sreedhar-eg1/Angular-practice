import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcattAllOperatorComponent } from './concatt-all-operator.component';

describe('ConcattAllOperatorComponent', () => {
  let component: ConcattAllOperatorComponent;
  let fixture: ComponentFixture<ConcattAllOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcattAllOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcattAllOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
