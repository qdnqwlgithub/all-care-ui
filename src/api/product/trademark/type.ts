import {R}
import {PageResponse} from "@/api/type";


export interface Trademark {
  id?: number,
  tmName: string,
  logoUrl: string
}

export type Records=Trademark[]

export interface TrademarkResponse extends PageResponse<Records>{

}

