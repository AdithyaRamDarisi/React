import { useState } from "react";
import React from "react";
import { useEffect } from "react";
function Instagram() {
   
   const[accountname,setAccountName] = useState("thor_19")
   const[accountfollow,setAccountFollow] = useState(1)

   useEffect(()=>{
           console.log("Follower rendered!")
       },[])

        useEffect(()=>{
           console.log("Follower updated!")
       },[accountfollow])
   
    return(     
        <>
        <h1>Hello Tuesday!!</h1>
        <h3>Account Username:{accountname}</h3>
        <h3>Account Follow:{accountfollow}</h3>
        <button onClick={() => setAccountName("adithya_1976")}>
        Change Username
      </button>
      <button onClick={()=> setAccountFollow(accountfollow + 1)}>Do Follow</button>
      {
            accountname === "adithya_1976" && 
                <h2>Welcome Adithya!</h2>
        }
        {
            accountfollow >= 10 &&
            <h2>You got 10 Followers!</h2>
        }
        {
            accountfollow >= 20 &&
            <h2>You got 20 Followers!</h2>
        }
        </>
    )
}
export default Instagram;