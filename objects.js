var hotel =
{ name: 'Biltmore',
  rooms: 500,
  roomsBooked: 150,
  roomService: true,
  roomsAvaliable:200,
  pool: false,
  
 
  
roomsAvail: function () {
    return this.rooms - this.roomsBooked; 
}

Name: function () {
    return this.name; 
}
}


}