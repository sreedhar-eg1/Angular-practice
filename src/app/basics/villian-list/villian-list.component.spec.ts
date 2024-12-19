import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillianListComponent } from './villian-list.component';

describe('VillianListComponent', () => {
  let component: VillianListComponent;
  let fixture: ComponentFixture<VillianListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VillianListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillianListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
