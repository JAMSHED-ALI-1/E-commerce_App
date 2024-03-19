import { ADD_TOCARD } from "./Constant";
export function addToCat(item){
    return {
        type:ADD_TOCARD,
        data:item
    }
}