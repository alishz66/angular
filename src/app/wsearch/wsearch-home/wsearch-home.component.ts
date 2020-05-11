import { Component, OnInit } from '@angular/core';
import { WikipediaService } from '../wikipedia.service';

@Component({
  selector: 'app-wsearch-home',
  templateUrl: './wsearch-home.component.html',
  styleUrls: ['./wsearch-home.component.css']
})
export class WsearchHomeComponent implements OnInit {
  pages = [];
  constructor(private wikipedia: WikipediaService) {

  }

  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((response: any) => {
      this.pages = response.query.search;
    });
  }

  ngOnInit(): void {
  }

}
