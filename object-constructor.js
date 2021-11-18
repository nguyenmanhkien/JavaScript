var hotel = new Object();

hotel.name = 'Park';
hotel.room = 120;
hotel.booked = 77;
hotel.checkAcailability = function(){
    return this.rooms - this.booked;
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById( 'rooms');
elRooms.textContent = hotel.checkAcailability();

var details1 = quayHotel.name + ' rooms: ';
    details1 += quayHotel.checkAvailability();
var elHotel = document.getElementById('hotel1');
elHotel1.textContent - details1;

var details2 = quayHotel.name + ' rooms: ';
    details2 += parkHotel.checkAvailanility();
var elHotel2 = document.getElementById( 'hotel2');
elHotel2.textContent = details2;
