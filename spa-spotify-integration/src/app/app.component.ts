import { Component, OnInit } from '@angular/core';
import { SearchService, UtilityService } from './services';
import { TokenContent } from './models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'spa-spotify-integration';
 

  constructor(private searchService: SearchService, private utilityService: UtilityService){

  }
  ngOnInit() {
    console.log('AppComponent: ngOnInit');
  }
 
}
