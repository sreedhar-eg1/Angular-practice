import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTaxComponent } from './hero-tax.component';

describe('HeroTaxComponent', () => {
  let component: HeroTaxComponent;
  let fixture: ComponentFixture<HeroTaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroTaxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
