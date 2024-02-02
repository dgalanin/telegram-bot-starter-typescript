import { Message } from 'node-telegram-bot-api'
import { echoMessage } from '../controllers/echo'
import { addMessageToHistory } from '../services/messageHistory'
import { sendLog } from '../services/logs'

export const messageHandler = async (msg: Message): Promise<void> => {
	const chatID = msg.chat.id

	await sendLog({ logMessage: `received message from ${chatID}`, logObject: msg })
}

export const textHandler = async (msg: Message): Promise<void> => {
	await addMessageToHistory({ msg })

	const chatID = msg.chat.id
	const text = msg.text || ''

	await echoMessage({ chatID, text })
}
