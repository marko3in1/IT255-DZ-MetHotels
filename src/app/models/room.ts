export class Room {
  roomNumber?: number;
  description?: string;
  price?: number;
  floor?: number;
  numberOfNights?: number;

  constructor(roomNumber: number, floor: number, description: string, price: number, numberOfNights?: number) {
    this.roomNumber = roomNumber;
    this.floor = floor;
    this.description = description;
    this.price = price;
    this.numberOfNights = numberOfNights;
  }
}
