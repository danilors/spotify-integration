import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { AuthGuard, UtilityService, SearchService, SearchCacheManagerService } from './services';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { AuthInterceptorProvider } from './interceptors/token.interceptor';
import { LayoutModule } from './layout-components/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    AlbumComponent,
    LoginComponent,
    NotFoundComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule
  ],
  providers: [SearchService,
    UtilityService,
    AuthGuard,
    SearchCacheManagerService,
    AuthInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
