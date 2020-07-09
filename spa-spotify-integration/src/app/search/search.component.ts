import { Component, OnInit } from '@angular/core';
import { SearchService, SearchCacheManagerService } from '../services';
import { SearchResponse, Albums } from '../models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(
    private searchService: SearchService,
    private searchCacheManagerService: SearchCacheManagerService) { }

  recentSearched: Albums = { items: [] };
  albums: Albums = { items: [] };

  ngOnInit(): void {
    this.recentSearched = this.searchCacheManagerService.getLastSearchedResults();
  }

  search(term): void {
    const value = term.value;
    if (value) {
      term.value = '';
      this.searchService.search(value).subscribe((result: SearchResponse) => {
        this.albums = result.albums;
      }, error => {
        console.log(error);
      });
    }
  }
}
