import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumResultListComponent } from './album-result-list/album-result-list.component';
import { AlbumResultListItemComponent } from './album-result-list/album-result-list-item/album-result-list-item.component';
import { AppRoutingModule } from '../app-routing.module';
import { AlbumCardComponent } from './album-card/album-card.component';

@NgModule({
  declarations: [
    AlbumResultListComponent,
    AlbumResultListItemComponent,
    AlbumCardComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
      AlbumResultListComponent,
     AlbumResultListItemComponent,
    AlbumCardComponent]
})
export class LayoutModule { }
