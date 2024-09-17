import { useState } from "react";
import "./Chatlist.css";

const Chatlist = () => {
    const [addMode,setAddMode]=useState(false)
    return (
        <div className="chatlist">
            <div className="search">
                <div className="searchBar">
                    <img src="./search.png" alt="search" />
                    <input type="text" placeholder="Search" />


                </div>
                <img src={addMode ? "./minus.png":"./plus.png"} alt="add"  className="add" onClick={()=> setAddMode((prev)=>!prev)} />
            </div>
        </div>
    )
};
export default Chatlist;
