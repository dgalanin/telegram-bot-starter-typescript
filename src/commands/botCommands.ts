import { BotCommand } from 'node-telegram-bot-api'

export const botCommands: BotCommand[] = [
	{ command: '/new', description: 'Начать новый чат' },
	{ command: '/help', description: 'Помощь' }
]
