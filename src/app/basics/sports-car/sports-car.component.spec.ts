import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsCarComponent } from './sports-car.component';

describe('SportsCarComponent', () => {
  let component: SportsCarComponent;
  let fixture: ComponentFixture<SportsCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportsCarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportsCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
