import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ArtistComponent } from './artist/artist.component';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from './services';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './notfound/notfound.component'; 
import { AlbumComponent } from './album/album.component';

const routes: Routes = [
  {
    path: '', component: AppComponent,
    children: [
      {
        path: '', component: SearchComponent
      },
      {
        path: 'artist/:id', component: ArtistComponent
      },
      {
        path: 'album/:id', component: AlbumComponent
      }
    ],
    canActivate: [AuthGuard],
  },
  {
    path: 'login/:access_token/:refresh_token', component: LoginComponent
  },
  { path: '404', component: NotFoundComponent },
  {
    path: '**', redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
