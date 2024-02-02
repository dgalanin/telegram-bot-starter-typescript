import { bot } from '../config/bot'
import { ChatId } from 'node-telegram-bot-api'

interface IEchoMessageProps {
	chatID: ChatId
	text: string
}

export const echoMessage = async ({ chatID, text }: IEchoMessageProps) => {
	await bot.sendMessage(chatID, text)
}
