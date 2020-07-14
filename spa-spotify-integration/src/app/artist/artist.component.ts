import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../services';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  constructor(
    private searchService: SearchService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.start();
  }

  start(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.searchService.searchArtistById(id).subscribe(result => {
      console.log('ArtistComponent result', result);
    }, error => {
      console.log('ArtistComponent error', error);
    });
  }

}
