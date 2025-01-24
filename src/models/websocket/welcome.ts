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
