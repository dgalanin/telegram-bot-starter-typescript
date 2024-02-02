import dotenv from 'dotenv'
dotenv.config()

type NODE_ENV_Type = 'prod' | 'stage'

export const NODE_ENV: NODE_ENV_Type = process.env.NODE_ENV === 'prod' ? 'prod' : 'stage'

export const TELEGRAM_BOT_TOKEN: string =
	NODE_ENV === 'prod'
		? (process.env.PROD_TELEGRAM_BOT_TOKEN as string)
		: (process.env.STAGE_TELEGRAM_BOT_TOKEN as string)
