import { useEffect, useState } from 'react'

import './App.css'
import BotAntooProvider from './shared/providers/BotAntooProvider';
import { ConnectionInfo } from './components/ConnectionInfo';

function App() {
  const [connected, setConnected] = useState<boolean>(false);
  const [sessionId, setSessionId] = useState<string>("");

  useEffect(() => {
    const socket = new WebSocket("wss://eventsub.wss.twitch.tv/ws")

    socket.onclose = () => {
      setConnected(false)
      setSessionId("");
    }

    socket.addEventListener("message", (message) => {
      const messageData = JSON.parse(message.data);

      if (messageData.metadata.message_type === 'session_welcome') {
        setConnected(messageData.payload.session.status === 'connected')
        setSessionId(messageData.payload.session.id)
      }

      console.log("Message from TWITCH:", messageData)
    })

    return () => {
      socket.close();
      setSessionId("");
    };
  }, []);

  return (
    <BotAntooProvider>
      <h1>Twitch TTS</h1>
      <div className="card">
        <ConnectionInfo
          connected={connected}
          sessionId={sessionId}
        />
      </div>
    </BotAntooProvider>
  )
}
export default App
