import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {CarouselModel} from '../../../model/carousel.model';
import {ContactModel} from '../../../model/contact.model';
import {AddressModel} from '../../../model/address.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contact: ContactModel = {
    mobilePhone: '+33612345678',
    fixPhone: '+33101020304',
    email: 'yourmail@qugenx.com',
    address: {
      street: 'rue',
      streetNumber: 9,
      streetName: 'karl marx',
      zipcode: 94500,
      city: 'Champigny sur Marne',
      country: 'Ile de France'
    }
  };

  testimonialDataList: CarouselModel[] = [
    {
      id: 1, author: 'John Mike 1', function: 'CEO, Author.Inc', comment: 'Absolute wonderful ! I am completely\n' +
        '              blown away.The very best.I was amazed\n' +
        '              at the quality', imagePath: 'assets/images/c-1.png'
    },
    {
      id: 2, author: 'John Mike 2', function: 'CEO, Author.Inc', comment: 'Absolute wonderful ! I am completely\n' +
        '              blown away.The very best.I was amazed\n' +
        '              at the quality', imagePath: 'assets/images/c-1.png'
    },
    {
      id: 3, author: 'John Mike 3', function: 'CEO, Author.Inc', comment: 'Absolute wonderful ! I am completely\n' +
        '              blown away.The very best.I was amazed\n' +
        '              at the quality', imagePath: 'assets/images/c-1.png'
    },
    {
      id: 4, author: 'John Mike 4', function: 'CEO, Author.Inc', comment: 'Absolute wonderful ! I am completely\n' +
        '              blown away.The very best.I was amazed\n' +
        '              at the quality', imagePath: 'assets/images/c-1.png'
    },
    {
      id: 5, author: 'John Mike 5', function: 'CEO, Author.Inc', comment: 'Absolute wonderful ! I am completely\n' +
        '              blown away.The very best.I was amazed\n' +
        '              at the quality', imagePath: 'assets/images/c-1.png'
    }
    ];


  constructor() { }

  ngOnInit() {
  }

}
