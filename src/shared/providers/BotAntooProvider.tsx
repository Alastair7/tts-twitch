import { createContext, ReactNode, useEffect, useState } from "react";

interface BotAntooType {
  token: string
}

interface BotAntoProviderProps {
  children: ReactNode
}
async function authenticateBot(): Promise<string> {
  const parameters = new URLSearchParams();
  parameters.append('client_id', import.meta.env.VITE_CLIENT_ID);
  parameters.append('client_secret', import.meta.env.VITE_CLIENT_SECRET);
  parameters.append('grant_type', 'client_credentials');

  try {
    const twitchAuthResponse = await fetch('https://id.twitch.tv/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: parameters.toString()
    });

    if (twitchAuthResponse.ok) {
      const data = await twitchAuthResponse.json();

      return data?.access_token ?? "";
    }
  } catch (ex) {
    console.log(ex);
  }

  return "";

}

export const BotContext = createContext<BotAntooType>({
  token: ""
});

export default function BotAntooProvider({ children }: BotAntoProviderProps) {
  const [accessToken, setAccessToken] = useState<string>("");

  useEffect(() => {

    const getTwitchToken = async () => {
      const botToken = await authenticateBot();
      setAccessToken(botToken);
    }

    getTwitchToken()
  }, [])

  return (
    <BotContext.Provider value={{ token: accessToken }}>
      {children}
    </BotContext.Provider>
  );

}

