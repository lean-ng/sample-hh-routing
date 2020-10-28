import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.scss']
})
export class CrisisListComponent implements OnInit {

  countries: { slug: string, name: string }[] =
    [
      { slug: 'germany', name: 'Germany' },
      { slug: 'france', name: 'France' },
      { slug: 'usa', name: 'USA' },
      { slug: 'china', name: 'China' },
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
