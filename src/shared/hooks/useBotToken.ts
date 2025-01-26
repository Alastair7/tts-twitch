import { useContext } from "react"
import { BotContext } from "../providers/BotAntooProvider"

export const useBotToken = () => {
  const { token } = useContext(BotContext)

  return token;
}
