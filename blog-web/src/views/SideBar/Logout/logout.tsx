import { useNavigate } from "react-router-dom";


const logout=()=>{
 const iteams:any=["userId","isLogin"];
 const navgate=useNavigate();
// console.log("5","from logout")

    // localStorage.removeItem("userId","Islogin")
//remove iteams from local storage
iteams.forEach((key:any)=>{
    localStorage.removeItem(key);
})
navgate("/signIn")
}

export default logout;