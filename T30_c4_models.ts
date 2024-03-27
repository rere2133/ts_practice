import { Room } from "./models/room";

const room1: Room = {
  name: "Room 1",
  id: 1,
  description: "This is room 1",
  imgUrlList: ["room1.jpg"],
  areaInfo: "20m2",
  bedInfo: "1 double bed",
  status: 1,
  facilityInfo: [
    {
      name: "TV",
      isProvided: true,
      description: "42 inch TV"
    },
    {
      name: "Air conditioner",
      isProvided: true,
      description: "2 HP"
    }
  ],
  price: 100,
  roomType: "Standard"
}
