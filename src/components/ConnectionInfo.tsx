import { useBotToken } from "../shared/hooks/useBotToken";

type Props = {
  connected: boolean,
  sessionId: string,
}

export const ConnectionInfo = ({ connected, sessionId }: Props) => {
  const token = useBotToken();
  return (
    <>
      <h1>Is Connected:{connected ? "true" : "false"}</h1>
      <h2>Session ID:{sessionId}</h2>
      <code>Token: {token}</code>
    </>
  );
}

