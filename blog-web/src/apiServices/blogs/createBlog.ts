
const baseURL = "http://localhost:8000";
import axios from "axios";


export const  createBlog=async(blogInput)=>{
    if(!blogInput)
    {
        alert("please enter something to create blog")
        return
    }


    try {
        const data=await axios.post(`${baseURL}/blog/createblog`,
            {
              
                withCredentials:true
               
            },
          
        )
      console.log(data);
    } catch (error) {
        console.log(error);
    }




}