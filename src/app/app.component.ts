import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RoomService } from './services/roomService';
import { Room } from './models/room'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public roomForm: FormGroup = new FormGroup({});
  public rooms: Room[];

  constructor(private _roomService: RoomService) {
    this._roomService.getRooms().subscribe((data) => {
      this.rooms = data;
    })
    this.initForm();
  }

  public initForm() {
    this.roomForm = new FormGroup({
      roomNumber: new FormControl(1, [
        Validators.required
      ]),
      floor: new FormControl(1, [
        Validators.required
      ]),
      description: new FormControl('', [
        Validators.required
      ]),
      price: new FormControl(1, [
        Validators.required
      ]),
      numberOfNights: new FormControl(1, [
        Validators.required
      ])
    });
  }

  public submitForm() {
    let roomNumber = this.roomForm.get('roomNumber')?.value;
    let floor = this.roomForm.get('floor')?.value;
    let description = this.roomForm.get('description')?.value;
    let price = this.roomForm.get('price')?.value;
    let numberOfNights = this.roomForm.get('numberOfNights')?.value;
    let room = new Room(roomNumber, floor, description, price, numberOfNights);
    this.createRoom(room)
  }

  public getRoom(roomNumber: number) {
    this._roomService.getRoom(roomNumber).subscribe((data) => {
      alert(JSON.stringify(data));
    })
  }
  public createRoom(room: Room) {
    this._roomService.createRoom(room).subscribe((data) => {
      this.rooms.unshift(data);
    })
  }
  public deleteRoom(roomNumber: number) {
    this._roomService.deleteRoom(roomNumber).subscribe((data) => {
      this._removeRoomFromList(roomNumber);
      alert("Room je obrisan sa servera");
    })
  }
  private _removeRoomFromList(roomNumber: number) {
    let ind = this.rooms.findIndex(room => room.roomNumber == roomNumber);
    this.rooms.splice(ind, 1);
  }


}
