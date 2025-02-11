import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ViewDetailPageRoutingModule } from './view-detail-routing.module';
import { ViewDetailPage } from './view-detail.page';
import { LanguageSelectorComponent } from '../components/language-selector/language-selector.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewDetailPageRoutingModule,
    LanguageSelectorComponent
  ],
  declarations: [ViewDetailPage]
})
export class ViewDetailPageModule {}
