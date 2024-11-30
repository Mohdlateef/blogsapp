
const baseURL = "http://localhost:8000";
import axios from "axios";

export const  createBlog=async(blogTitle:string,blogInput:string,userId:any)=>{
    
  console.log(blogTitle,blogInput,userId)
    if(!blogInput)
    {
        alert("please enter text")
        return
    }
    axios.defaults.withCredentails=true;
// console.log("from createBlog",userId)

    try {
        const res =await axios.post(`${baseURL}/blog/createblog`,{

            title:blogTitle,
            textbody:blogInput,
            userId:userId
        }
          ,{
            headers:{
                auth:(JSON.parse(localStorage.getItem("isLogin"))).token,
                email:"test5@gmail.com "
            }
          }
          
        )
      console.log(res);
    } catch (error) {
        console.log(error);
    }




}