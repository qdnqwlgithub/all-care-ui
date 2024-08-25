import request from "@/utils/request";

function getData(categoryLevel:number){
switch (categoryLevel){
  case 1:
    break;
  case 2:
    break;
  case 3:
    break;

}
}

import {onMounted} from "vue";
onMounted(()=>{

})

enum Api {
  GET_CATEGORY_LIST_URL = "/admin/product/getCategory",
}

export const reqListC1List = () => request.get<any, any>(`${Api.GET_CATEGORY_LIST_URL}/1`);
export const reqListC2List = () => request.get<any, any>(`${Api.GET_CATEGORY_LIST_URL}/2`);
export const reqListC3List = () => request.get<any, any>(`${Api.GET_CATEGORY_LIST_URL}/3`);

