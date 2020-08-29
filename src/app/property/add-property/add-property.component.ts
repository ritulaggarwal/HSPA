import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase} from '../../model/ipropertybase';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm: NgForm
  @ViewChild('formTabs') formTabs: TabsetComponent;
  propertyTypes: Array<string>=['House','Appartment','Duplex'];
  furnishTypes: Array<string>=['Fully','Semi','Unfurnished'];

  propertyView: IPropertyBase={
    Id: null,
    Name:'',
    Price:null,
    SellRent: null,
    PType: null,
    FType:null,
    BHK: null,
    BuiltArea: null,
    RTM:null,
    City: null
  };
  constructor(){}

  ngOnInit(): void {
  }
  onSubmit(){
    console.log('Congrats');
    console.log(this.addPropertyForm);
  }
  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }


}
