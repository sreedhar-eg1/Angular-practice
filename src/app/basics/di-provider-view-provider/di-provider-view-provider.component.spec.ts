import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiProviderViewProviderComponent } from './di-provider-view-provider.component';

describe('DiProviderViewProviderComponent', () => {
  let component: DiProviderViewProviderComponent;
  let fixture: ComponentFixture<DiProviderViewProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiProviderViewProviderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiProviderViewProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
