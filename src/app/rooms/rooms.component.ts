import { Component, Input, OnInit } from '@angular/core';
import { Room } from '../models/room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  @Input() room: Room;
  rooms: Room[] = [];



  constructor() { }

  ngOnInit(): void {
  }

  addRoom(roomNumber: HTMLInputElement, floor: HTMLInputElement, description: HTMLInputElement, price: HTMLInputElement): boolean {
    this.rooms.push(new Room(parseInt(roomNumber.value), description.value, parseFloat(price.value), parseInt(floor.value)));
    return false;
  }

}
