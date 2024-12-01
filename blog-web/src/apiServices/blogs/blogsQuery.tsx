import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query"
import { BlogsAPI } from ".."
import blogsAPI from "./blogsAPI";
import { data } from "react-router-dom";





const useQueryreadBlogs=(pageNumber:Number)=>{
    return useQuery({
        queryKey:["blogs",pageNumber],
        queryFn:()=>BlogsAPI.readBlogs(pageNumber),
        placehlderData:keepPreviousData,
    });
}




const useMutationCreateBlog=(blogTitle:String,blogInput:string,_id:any)=>{
    return useMutation({
        mutationFn:()=>blogsAPI.createBlog(blogTitle,blogInput,_id)
      
    })
}

export default{
    useQueryreadBlogs,
    useMutationCreateBlog
}



