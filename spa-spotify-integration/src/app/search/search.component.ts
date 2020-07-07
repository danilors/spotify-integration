import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  albums: any = {};

  ngOnInit(): void {
  }

  search(term): void {
    const value = term.value;
    if (value) {
      term.value = '';
      this.searchService.search(value).subscribe(result => {
        this.albums = result.albums;
      }, error => {
        console.log(error);
      });
    }
  }
}
