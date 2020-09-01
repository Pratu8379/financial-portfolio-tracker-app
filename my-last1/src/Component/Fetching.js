/*import React,{useState,useEffect} from "react";
import axios from 'axios';
function Fetching(){
  const [post,setpost]=useState({})
  const [id,setId]=useState(1)  
useEffect(()=>{
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then(res =>{
    console.log("executing")
    console.log(res)
    setpost(res.data)
  })
  .catch(err =>{
    console.log(err)
  })
},[id])
  return(
    <div>
    <input type = "text" value={id} onChange={e =>setId(e.target.value)}/>
  <table>
     
    <div>{post.id}</div>  
      <div>{post.title}</div> 
      <div>{post.body}</div>  
       <div>{post.userid}</div>
       </table>
    
{

}

    </div>
  )
}
export default Fetching */