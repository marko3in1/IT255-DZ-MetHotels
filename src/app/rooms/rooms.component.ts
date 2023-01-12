import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Room } from '../models/room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  @Input() room: Room;
  rooms: Room[] = [];

  roomForm = new FormGroup({
    roomNumber: new FormControl(null, Validators.required),
    floor: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    price: new FormControl(null, Validators.required),
    numberOfNights: new FormControl(null, Validators.required),
    option: new FormControl(null)
  });

  optionList = [
    { id: 1, name: 'Sauna', price: 1000 },
    { id: 2, name: 'Klima', price: 1500 },
    { id: 3, name: 'Minibar', price: 2000 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addRoom(roomNumber: HTMLInputElement, floor: HTMLInputElement, description: HTMLInputElement, price: HTMLInputElement) {
    this.rooms.push(new Room(parseInt(roomNumber.value), parseInt(floor.value), description.value, parseInt(price.value)));
    this.roomForm.reset();
    // @ts-ignore
    this.roomForm.get('price').setValue(null);
  }

  incrementSauna(checked: Event, index: number) {
    let totalPrice = this?.roomForm?.get('price')?.value;
    if (checked) {
      // @ts-ignore
      totalPrice += this.optionList[index]?.price;
    } else {
      // @ts-ignore
      totalPrice -= this.optionList[index]?.price;
    }
      // @ts-ignore
    this.roomForm.get('price').setValue(totalPrice);
  }

  checkDescription(description: string) {
    return description.length < 6;
  }

}
