import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css'],
})
export class PropertyDetailsComponent implements OnInit {
  public PropertyId!: number;
  constructor(private activeRoute: ActivatedRoute, private router:Router) {}

  ngOnInit() {
    this.PropertyId = this.activeRoute.snapshot.params['id'];
    this.activeRoute.params.subscribe(
      params=>{
        this.PropertyId=+params["id"];
      }
    );
  }
}
