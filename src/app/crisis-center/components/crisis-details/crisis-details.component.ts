import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crisis-details',
  templateUrl: './crisis-details.component.html',
  styleUrls: ['./crisis-details.component.scss']
})
export class CrisisDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('Init Detail', this.route.snapshot.params);
    this.route.paramMap.subscribe( params => console.log(params.get('country')));
  }

}
