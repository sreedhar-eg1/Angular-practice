import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipLastComponent } from './skip-last.component';

describe('SkipLastComponent', () => {
  let component: SkipLastComponent;
  let fixture: ComponentFixture<SkipLastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkipLastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkipLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
