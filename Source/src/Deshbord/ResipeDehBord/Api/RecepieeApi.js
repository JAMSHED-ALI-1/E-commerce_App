import axios from "axios";
const BaseUrl = 'https://dummyjson.com/';
export const  fatchData=async ()=>{
    try {
        const res=await axios.get(`${BaseUrl}recipes`)
    return res.data.recipes;
    } catch (error) {
        console.log(error)
    }
}
export const SearchApi=async({search})=>{
   try {
    const res=await axios.get(`${BaseUrl}recipes/search?q=${search}`)
    return res.data.recipes
   } catch (error) {
    console.log(error)
   }
}