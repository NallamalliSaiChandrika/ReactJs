import React from "react";
import Data from "./Data";
function Page(){
    return(
        <>
        < div className="Card">
            <div className="Img">
                <img src={Data[0].image}></img>
            </div>
            <p>{Data[0].name}</p>
            <h2>Location</h2>
            <h1>{Data[0].location}</h1>
            <h2>Blood Group</h2>
            <h1>{Data[0].bloodgroup}</h1>
            <h2>Age</h2>
            <h1>{Data[0].age}</h1>

        </div>    
    </>)

}
export default Page