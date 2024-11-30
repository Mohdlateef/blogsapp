import axios from "axios"


const baseURL='http://localhost:8000'
export const readBlogs=async (page:any)=>{
 console.log(page);
    try {
        const res=await axios.get(`${baseURL}/blog/readblogs?SKIP=${page}`,
            {
              
                withCredentials:true
               
            },

        )
  console.log(res.data)
        return res.data.status===200? res.data.data:[]

   
    } catch (error) {
        console.log(error)
    }

}