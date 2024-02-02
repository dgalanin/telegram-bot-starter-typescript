import { ChatId } from 'node-telegram-bot-api'

interface ISaveMessageToDatabaseProps {
	chatID: ChatId
	message: string
}

export const saveMessageToDatabase = ({ chatID, message }: ISaveMessageToDatabaseProps) => {
	// ... write your method
}
