## Telegram bot starter with Typescript

This is a starter template for building Telegram bots using TypeScript.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dgalanin/telegram-bot-starter-typescript.git
   ```

2. Navigate into the project directory:
   ```bash
   cd tg-bot-starter-typescript
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Usage

#### Environment Configuration

Before running the bot, make sure to set up your environment variables. Create a `.env` file in the root directory based on the provided `.env.example`. Fill in the required variables with your Telegram Bot API token and any other necessary configuration.

Example `.env.example` file:

```
PROD_TELEGRAM_BOT_TOKEN=PAST_YOUR_TOKEN_HERE
STAGE_TELEGRAM_BOT_TOKEN=PAST_YOUR_TOKEN_HERE
```

#### Development

To run the bot in development mode with automatic reloading on file changes, use:

```bash
npm run dev
```

This command sets the `NODE_ENV` environment variable to `stage` and starts the bot using `ts-node` with `nodemon`.

#### Production

To run the bot in production mode:

```bash
npm run start:prod
```

This command builds the TypeScript code using `tsc` and starts the bot with `NODE_ENV` set to `prod`.
