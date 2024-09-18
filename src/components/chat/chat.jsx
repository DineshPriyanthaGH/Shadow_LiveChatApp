import EmojiPicker, { Emoji } from "emoji-picker-react";
import "./chat.css";
import React, { useState } from 'react';

const Chat = () => {
    const [open, setOpen] = useState(false);
    const[text, setText] = useState("")

    const handleEmoji = e => {
        setText((prev)=>prev+e.emoji);
        setOpen(false);
    };
    console.log(text);
    return (
      <div className='chat'>
        <div className="top">
            <div className="user">
                <img src="./avatar.png" alt="user" />
                <div className="texts">
                    <span className="">User Name</span>
                    <p>Hello, how can I help you?</p>

                </div>
            </div>
            <div className="icons">
                <img src="./phone.png" alt="phone" />
                <img src="./video.png" alt="video" />
                <img src="./info.png" alt="info" />

            </div>
        </div>
        <div className="center">
            <div className="message">
                <img src="./avatar.png" alt="user" />
                <div className="texts">
                 <p>Hello</p>
                    <span className="">1 min ago</span>
                    
                </div>
            </div>
            <div className="message_own">
                
                <div className="texts">
                 <p>Hello dr</p>
                    <span className="">1 min ago</span>
                    
                </div>
            </div>
            <div className="message">
                <img src="./avatar.png" alt="user" />
                <div className="texts">
                 <p style={{width: "50%"}}>How can Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo reprehenderit alias eum quibusdam ipsa modi labore, odit omnis sed quidem excepturi porro commodi nulla debitis sapiente placeat iure totam eveniet. help you</p>
                    <span className="">1 min ago</span>
                    
                </div>
            </div>
            <div className="message_own">
                
                <div className="texts">
                 <p>wait</p>
                    <span className="">1 min ago</span>
                    
                </div>
            </div>
            <div className="message">
                <img src="./avatar.png" alt="user" />
                <div className="texts">
                 <p>ok dr</p>
                    <span className="">1 min ago</span>
                    
                </div>
            </div>
            <div className="message_own">
                
                <div className="texts">
                    <img src="./p1.png" alt="user" />
                 <p>wait</p>
                    <span className="">1 min ago</span>
                    
                </div>
            </div>
            <div className="message_own">
                
                <div className="texts">
                 <p>wait Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos possimus ea magni provident, harum ipsum sint omnis incidunt amet. Aspernatur asperiores quam quas quos harum laudantium saepe culpa quod adipisci!</p>
                    <span className="">1 min ago</span>
                    
                </div>
            </div>
            <div className="message">
                <img src="./avatar.png" alt="user" />
                <div className="texts">
                 <p style={{width: "50%"}}>How can Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo reprehenderit alias eum quibusdam ipsa modi labore, odit omnis sed quidem excepturi porro commodi nulla debitis sapiente placeat iure totam eveniet. help you</p>
                    <span className="">1 min ago</span>
                    
                </div>
            </div>

        </div>
        <div className="bottom">
            <div className="icons">
                <img src="./img.png" alt="img" />
                <img src="./camera.png" alt="camera" />
                <img src="./mic.png" alt="mic" />
            </div>
        <input type="text" placeholder="Type a message" 
        value={text} onChange={(e) => setText(e.target.value)}/>
            <div className="emoji">
                <img src="./emoji.png" alt="emoji" onClick={() => setOpen((prev)=>!prev)} />
                <div className="picker"><EmojiPicker open={open} onEmojiClick={handleEmoji}/></div>
                    
                <button className="Sendbottom">Send</button>
          
            </div>
        </div>
      </div>

    )
  }
  
  export default Chat