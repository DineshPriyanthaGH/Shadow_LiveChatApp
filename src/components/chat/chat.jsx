import "./chat.css";

const Chat = () => {
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
        <div className="center"></div>
        <div className="bottom">
          
            </div>
        </div>
      </div>

    )
  }
  
  export default Chat