import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReviewModalPage } from './review-modal.page';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

describe('ReviewModalPage', () => {
  let component: ReviewModalPage;
  let fixture: ComponentFixture<ReviewModalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewModalPage],
      imports: [IonicModule.forRoot(), NgbModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ReviewModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
