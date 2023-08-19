 import React,{ useState } from "react";
 import axios from "axios";
 import './createpost.css'
 const Createpost = () =>{
    const [title,setTitle] = useState([])
    const [post,setPost]=useState([])
    const Anil = async () =>
    {
        try{
            const res = await axios.post("https://server-l7gb.onrender.com/"+title+'/'+post);
            
               if(res.data)
               {
                   alert("Successfully stored");
                   console.log(res.data)
                   window.location.href="/User";
               }
               else{
                   alert("try again");
               }
           
           
           
           }catch(e)
           {
            console.log(e);
           }
           
    }
    const handleSubmit = (e) => {
        e.preventDefault(e);
        // You can perform login validation here
        console.log('Login clicked');
      };
    return(
        <>
        <div className="Indu">
            <form onSubmit={handleSubmit}>
                <label>Post Title</label><br/>
                <input type ="text"  onChange={(e) => setTitle(e.target.value)}/><br/>
                <label>Post Information</label><br/>
                <input type ="text"  onChange={(e) => setPost(e.target.value)}/>
                <button onClick={Anil}>Post Content</button>
            </form>
        </div>
        </>
    );
};
export default Createpost