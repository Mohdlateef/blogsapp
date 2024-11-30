import axios from "axios"

const baseURL = "http://localhost:8000";

const getprofile=async()=>{
console.log("from profile")
    const res=await axios.get(`${baseURL}/profile/getProfile`)
    console.log(res);
}






export default{
    getprofile,
}