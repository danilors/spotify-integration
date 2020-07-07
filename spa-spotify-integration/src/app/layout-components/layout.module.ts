import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumResultListComponent } from './album-result-list/album-result-list.component';
import { AlbumResultListItemComponent } from './album-result-list-item/album-result-list-item.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    AlbumResultListComponent,
    AlbumResultListItemComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
      AlbumResultListComponent,
     AlbumResultListItemComponent]
})
export class LayoutModule { }
