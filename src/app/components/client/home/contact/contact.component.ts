import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CarouselModel} from '../../../../model/carousel.model';
import {ContactModel} from '../../../../model/contact.model';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';
import {AddressModel} from '../../../../model/address.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() contactModel: ContactModel; // decorate the property with @Input()
  @Output() newContactEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    console.log('contact = ', this.contactModel);
  }

  getFullAddress(): string {
    const address: AddressModel = this.contactModel.address;
    return address.streetNumber + ' ' + address.street + ' ' + address.streetName + ' ' + address.city;
  }

  addNewItem(value: string) {
    this.newContactEvent.emit(value);
  }
}
