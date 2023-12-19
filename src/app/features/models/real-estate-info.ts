import {Address} from "./address";

export class RealEstateInfo {
  id: number=0
  name: string=''
  description: string=''
  developer: string=''
  type?: string=''
  price: number=0
  square: number=0
  roomsCount: number=0
  address?: Address
}
