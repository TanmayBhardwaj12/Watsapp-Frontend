import React,{useEffect, useState} from 'react';
import './App.css';
import Chat from './components/Chat';
import SideBar from './components/SideBar';
import Pusher from 'pusher-js';
import axios from './components/axios'

function App() {

  const [messages,setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync')
    .then(response=>{
      console.log(response.data);
      setMessages(response.data)
    })
  }, [])

  useEffect(() => {
    const pusher = new Pusher(process.env.REACT_APP_PUSHER_KEY, {
      cluster: process.env.REACT_APP_PUSHER_CLUSTER
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage)=> {
      alert(JSON.stringify(newMessage));
      setMessages([...messages,newMessage])
    });
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }

  }, [messages]);
  console.log(messages);
  return (
    <div className="app">
      <div className="app_body">
      <SideBar/>
      <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
