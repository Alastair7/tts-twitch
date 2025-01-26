export type WelcomeMessage = {
  metadata: {
    message_id: string,
    message_type: string,
    message_timestamp: string,
  },
  payload: {
    session: {
      id: string,
      status: string,
      keepalive_timeout_seconds: number,
      reconnect_url: string,
      connected_at: string,
    }
  }
}

export type KeepALiveMessage = {
  metadata: {
    message_id: string,
    message_type: string,
    message_timestamp: string,
  },
  payload: {}
}

export type NotificationMessage = {
  metadata: {
    message_id: string,
    message_type: string,
    message_timestamp: string,
    subscription_type: string,
    subscription_version: string
  },
  payload: {
    subscription: {
      id: string,
      status: string,
      type: string,
      version: string,
      cost: number,
      condition: object,
      transport: {
        method: string,
        session_id: string,
        created_at: string,
      }
      event: object
    }
  }
}

export type ReconnectMessage = {
  metadata: {
    message_id: string,
    message_type: string,
    message_timestamp: string,
  },
  payload: {
    session: {
      id: string,
      status: string,
      keepalive_timeout_seconds: number,
      reconnect_url: string,
      connected_at: string,
    }
  }
}
