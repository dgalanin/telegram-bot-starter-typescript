import { bot } from './src/config/bot'
import { botCommands } from './src/commands/botCommands'
import { messageHandler, textHandler } from './src/handlers/messageHandler'
import { NODE_ENV } from './src/config/config'

const startBot = async () => {
	console.log(`Bot has been started on ${NODE_ENV} environment`)

	await bot.setMyCommands(botCommands)

	await bot.on('message', async msg => await messageHandler(msg))
	await bot.on('text', async msg => await textHandler(msg))
}

startBot()
