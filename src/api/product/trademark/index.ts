import request from "@/utils/request";
import { QueryPageWrapper } from "@/api/type";
import {Trademark, TrademarkResponse} from "@/api/product/trademark/type";
import {R} from '@/api/type'

enum Api {
  LIST_TRADEMARK_URL = "/admin/product/baseTrademark",
  ADD_TRADEMARK_URL = "/admin/product/baseTrademark/save",
  UPDATE_TRADEMARK_URL = "/admin/product/baseTrademark/update",
  DELETE_TRADEMARK_BY_ID_URL = "/admin/product/baseTrademark/remove/",
  GET_TRADEMARK_BY_ID_URL = "/admin/product/baseTrademark/get/",
}

export const reqListTrademark = (queryPageWrapper: QueryPageWrapper) =>
  request.get<any, TrademarkResponse>(
    `${Api.LIST_TRADEMARK_URL}/${queryPageWrapper.page}/${queryPageWrapper.limit}`,
  );

export const reqAddTrademark=(trademark:Trademark)=>request.post<any,R>(Api.ADD_TRADEMARK_URL,trademark)
export const reqUpdateTrademark=(trademark:Trademark)=>request.put<any,R>(Api.UPDATE_TRADEMARK_URL,trademark)
export const reqGetTrademarkById=(id:number)=>request.get<any,R>(`${Api.GET_TRADEMARK_BY_ID_URL}${id}`)
export const reqDeleteTrademarkById=(id:number)=>request.get<any,R>(`${Api.DELETE_TRADEMARK_BY_ID_URL}${id}`)
