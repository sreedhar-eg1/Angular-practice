import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishReplayOperatorComponent } from './publish-replay-operator.component';

describe('PublishReplayOperatorComponent', () => {
  let component: PublishReplayOperatorComponent;
  let fixture: ComponentFixture<PublishReplayOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublishReplayOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishReplayOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
