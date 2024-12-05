import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinComponent } from './min.component';

describe('MinComponent', () => {
  let component: MinComponent;
  let fixture: ComponentFixture<MinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
