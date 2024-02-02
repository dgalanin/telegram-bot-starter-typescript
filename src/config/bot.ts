import TelegramBot from 'node-telegram-bot-api'
import { TELEGRAM_BOT_TOKEN } from './config'

export const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true })
