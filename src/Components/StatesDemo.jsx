import React from "react";
import {useEffect} from "react";
import {useState} from "react";
function StatesDemo() {

    const[videoName,setVideoName] = useState("State Js");
    const[videoLikes,setVideoLikes] = useState(95)
     useEffect(()=>{
        console.log("component rendered!")
    },[])
    
    useEffect(()=> {
        console.log("Video Likes Updated")
    },[videoLikes])
    return(
    <>
    <h1>StatesDemo</h1>
    <h1>Video name : {videoName}</h1>
    <h1>likes:{videoLikes}</h1>
    <button onClick={()=>setVideoLikes(videoLikes + 1)}>Like Video</button>
    <button onClick={()=>setVideoLikes(videoLikes - 1)}>Dislike Video</button>
    {
        videoLikes >= 100 &&
        <h2>yaay! People are liking you video</h2>
    }
    </>
    )
}
export default StatesDemo;