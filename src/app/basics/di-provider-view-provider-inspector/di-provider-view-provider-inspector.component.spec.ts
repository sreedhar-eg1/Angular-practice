import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiProviderViewProviderInspectorComponent } from './di-provider-view-provider-inspector.component';

describe('DiProviderViewProviderInspectorComponent', () => {
  let component: DiProviderViewProviderInspectorComponent;
  let fixture: ComponentFixture<DiProviderViewProviderInspectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiProviderViewProviderInspectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiProviderViewProviderInspectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
