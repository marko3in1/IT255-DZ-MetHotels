import {Injectable} from "@angular/core";

@Injectable()
export class RoomService {

  constructor() {

  }

  getPrice(numberOfNights: number, price: number): number {
    return numberOfNights * price;
  }
}
