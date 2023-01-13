import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from "../models/room";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private baseUrl = 'http://localhost:3000/rooms';

  constructor(private _httpClient: HttpClient) { }


  public getRooms(): Observable<Room[]> {
    return this._httpClient.get<Room[]>(this.baseUrl).pipe(
      map((data: any[]) => data.map((item: any) =>
        this._createRoomFromObject(item)))
    );
  }


  public getRoom(roomNumber: number): Observable<Room> {
    return this._httpClient.get(this.baseUrl + '/' + roomNumber).pipe(
      map((data: any) => this._createRoomFromObject(data)),
    );
  }
  public deleteRoom(roomNumber: number): Observable<string> {
    return this._httpClient.delete(this.baseUrl + '/' + roomNumber).pipe(
      map((data: any) => 'Room deleted successfully'),
    );
  }
  public createRoom(room: Room): Observable<Room> {
    return this._httpClient.post(this.baseUrl, room).pipe(
      map((data: any) => this._createRoomFromObject(data)),
    );

  }
  private _createRoomFromObject(item: any) {
    return new Room(item.roomNumber, item.floor, item.description, item.price, item.numberOfNights);
  }


}
