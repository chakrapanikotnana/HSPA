import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../../services/housing.service';
import { IProperty } from '../IProperty.Interface';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from '../../model/IPropertyBase';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css',
})
export class PropertyListComponent implements OnInit {
  properties: Array<IPropertyBase> = [];
  SellRent=1;
  //properties: any;
  constructor(private router:ActivatedRoute, private housingService: HousingService) {}

  ngOnInit(): void {
    if(this.router.snapshot.url.toString())
    {
      this.SellRent=2;
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
      (data) => {
        this.properties = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
