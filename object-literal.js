var hotel = {
    name : 'Quay',
    room : 40,
    booked : 25,
    checkAcailability : function(){
        return this.rooms - this.booled;
    }
};

var elName = document.getElementById( 'hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById( 'rooms');
elRooms.textContent = hotel.checkAvailability();