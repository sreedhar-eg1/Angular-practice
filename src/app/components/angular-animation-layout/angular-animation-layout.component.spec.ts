import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAnimationLayoutComponent } from './angular-animation-layout.component';

describe('AngularAnimationLayoutComponent', () => {
  let component: AngularAnimationLayoutComponent;
  let fixture: ComponentFixture<AngularAnimationLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularAnimationLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularAnimationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
