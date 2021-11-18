function Hotel(name. rooms, booked){
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = finction(){
        return this.room - this.booked;
    }
};

var quayHotel = new Hotel(name: 'Quay', rooms: 40, booked:25);
var parkHotel = new Hotel(name: 'Park', rooms: 120, booked:77);