import { Component, Input } from '@angular/core';
import { IProperty } from '../IProperty.Interface';
import { IPropertyBase } from '../../model/IPropertyBase';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.css'
})
export class PropertyCardComponent {
  @Input()
  Property!: IPropertyBase;
  @Input()
  hideIcons: boolean = false;
  // Property:any={
  //   "Id":"1",
  //   "Name":"Kotnana House",
  //   "Type":"House",
  //   "Price":"250000"
  // }

}
