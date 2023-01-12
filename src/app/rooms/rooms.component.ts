import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Room } from '../models/room';
import {RoomService} from "../services/roomService";
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  @Input() room: Room;
  rooms: Room[] = [];
  totalPrice: number;

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
    { id: 3, name: 'Nocenje', price: 2000 },
  ];

  ngOnInit(): void {
  }

  constructor(private roomService: RoomService) {
  }

  addRoom(roomNumber: HTMLInputElement, floor: HTMLInputElement, description: HTMLInputElement, price: HTMLInputElement, numberOfNights: HTMLInputElement) {
    this.calculateTotalPrice();
    this.rooms.push(new Room(parseInt(roomNumber.value), parseInt(floor.value), description.value, parseInt(price.value), parseInt(numberOfNights.value)));
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

  calculateTotalPrice() {
    let numberOfNights = this.roomForm.get('numberOfNights')?.value;
    let price = this.roomForm.get('price')?.value;
    console.log(numberOfNights, "numberOfNights");
    console.log(price, "price");
    // @ts-ignore
    this.totalPrice = this.roomService.getPrice(numberOfNights, price);
  }

  checkDescription(description: string) {
    return description.length < 6;
  }


}
