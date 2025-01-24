import { useState } from 'react'

import './App.css'
import { WelcomeMessage } from './models/websocket/welcome'

function App() {
  const socket = new WebSocket("wss://eventsub.wss.twitch.tv/ws")
  const welcomeMessage: WelcomeMessage = {
    metadata: {
      message_id: "",
      message_type: "",
      message_timestamp: "",
    },
    payload: {
      session: {
        id: "",
        status: "",
        keepalive_timeout_seconds: 0,
        reconnect_url: "",
        connected_at: "",
      }
    }
  }

  const demoText = ["Hello", "How are you?", "Hey could you help me with this issue?"]
  return (
    <>
      <h1>Twitch TTS</h1>
      <div className="card">
      </div>
    </>
  )
}

export default App
