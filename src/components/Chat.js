import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticonOutlined, MicOutlined, MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import axios from './axios';

function Chat({messages}) {
    const [input,setInput] = useState([]);

    const sendMessage = async (e)=>{
        e.preventDefault();
        await axios.post('/messages/new',{
            message:input,
            name:"DEMO",
            timestamp:new Date().toLocaleString('en-US', { hour: 'numeric', hour12: true }),
            recieved:true
        })
        setInput("");
    }

    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />
                <div className="chat_headerInfo">
                    <h3>Room Name</h3>
                    <p>Last Seen at....</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
                {messages.map((message)=>(
                    <div className={`chat_message ${message.received && "chat_reciever"}`}>
                    <p>
                        {message.message}
                        <span className="chat_timestamp">
                            {message.timestamp}
                        </span>
                    </p>
                    </div>
                ))}
            </div>
            <div className="chat_footer">
                <InsertEmoticonOutlined/>
                <AttachFile/>
                <form>
                    <input
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    placeholder="Type a message"
                    type="text"
                    />
                    <button 
                    onClick={sendMessage}
                    type="submit">
                        Send a Message
                    </button>
                </form>
                <MicOutlined/>
            </div>
        </div>
    )
}

export default Chat
