export class Room {
    roomNumber: number;
    description: string;
    price: number;
    floor: number;


    constructor(roomNumber: number, description: string, price: number, floor: number) {
        this.roomNumber = roomNumber;
        this.description = description;
        this.price = price;
        this.floor = floor;
    }
}