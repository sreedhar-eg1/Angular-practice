import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartsWithOperatorComponent } from './starts-with-operator.component';

describe('StartsWithOperatorComponent', () => {
  let component: StartsWithOperatorComponent;
  let fixture: ComponentFixture<StartsWithOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartsWithOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartsWithOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
