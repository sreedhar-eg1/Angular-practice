import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineLatestOperatorComponent } from './combine-latest-operator.component';

describe('CombineLatestOperatorComponent', () => {
  let component: CombineLatestOperatorComponent;
  let fixture: ComponentFixture<CombineLatestOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombineLatestOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombineLatestOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
