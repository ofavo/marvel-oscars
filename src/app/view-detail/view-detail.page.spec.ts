import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ViewDetailPageRoutingModule } from './view-detail-routing.module';
import { ViewDetailPage } from './view-detail.page';

describe('ViewDetailPage', () => {
  let component: ViewDetailPage;
  let fixture: ComponentFixture<ViewDetailPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ViewDetailPage],
      imports: [IonicModule.forRoot(), ViewDetailPageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
