import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiProviderViewProviderChildComponent } from './di-provider-view-provider-child.component';

describe('DiProviderViewProviderChildComponent', () => {
  let component: DiProviderViewProviderChildComponent;
  let fixture: ComponentFixture<DiProviderViewProviderChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiProviderViewProviderChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiProviderViewProviderChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
