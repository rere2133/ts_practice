export type Room = {
  name: string;
  id: number;
  description: string;
  imgUrlList: string[];
  areaInfo: string;
  bedInfo: string;
  status: number;
  facilityInfo: Facility[];
  price: number;
  roomType: string;
}
export type Facility ={
  name: string;
  isProvided: boolean;
  description: string;
}