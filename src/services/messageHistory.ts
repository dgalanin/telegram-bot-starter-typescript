import { Message } from 'node-telegram-bot-api'
import { saveMessageToDatabase } from './database'

interface IAddMessageToHistoryProps {
	msg: Message
}

export const addMessageToHistory = async ({ msg }: IAddMessageToHistoryProps) => {
	const chatID = msg.chat?.id
	const message = msg.text || 'no text data'
	// const photo = msg.photo || 'no photo data'
	// other params....

	await saveMessageToDatabase({ chatID, message })
}
