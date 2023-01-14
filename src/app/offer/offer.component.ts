import { Component, OnInit } from '@angular/core';
import {Room} from "../models/room";


@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  room: Room = new Room(1,4,'Soba 1',123,2);
  room2: Room = new Room(2,3,'Soba 2',234,2);
  room3: Room = new Room(3,6,"Soba 3",234,1);
  rooms: Room[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  offerFunction() {
    this.rooms.push(this.room);
    this.rooms.push(this.room2);
    this.rooms.push(this.room3);
  }

}
