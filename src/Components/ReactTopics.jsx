import React from "react";
function ReactTopics() {
    let topics = ["props","state","Components"]
    return(
        <>
        <ul>
     {
        topics.map((topic,index) =>{
            return <li key={index}>{topic}-{index}</li>
        })
     }
     </ul>
        </>
    )
}
export default ReactTopics;