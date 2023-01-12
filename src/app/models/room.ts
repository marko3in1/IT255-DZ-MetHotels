export class Room {
    roomNumber?: number;
    description?: string;
    price?: number;
    floor?: number;
  
    constructor(roomNumber: number, floor: number, description: string, price: number) {
      this.roomNumber = roomNumber;
      this.floor = floor;
      this.description = description;
      this.price = price;
    }
  }