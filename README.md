# Slopbot

A simple Discord bot that uses OpenAI’s image generation API (DALL·E) to create images on-demand from text prompts. Built with Node.js and Discord.js, it listens for a !create <prompt> command in any channel it has access to and returns a generated image URL.

## Features

- Responds to the !create command.
- Sends a generated image URL based on your text prompt.
- Utilizes OpenAI’s createImage method for DALL·E image creation.
- Easy to configure with a .env file for secrets.

## Requirements

- Node.js (v18+ or v20+ recommended).
- A Discord developer application with a bot token.
- An OpenAI account with an API key.
- Permissions on the Discord server to invite and manage the bot.

## Project Setup

### 1. Clone the Repository

```bash
Copy code
git clone https://github.com/yourusername/slopbot.git
cd slopbot
```

### 2. Install Dependencies

```bash
Copy code
npm install
This installs discord.js, openai, dotenv, and any other required packages.
```

### 3. Create a .env File

In the project root, create a .env file containing your secrets:

```bash
DISCORD_TOKEN=YOUR_DISCORD_BOT_TOKEN
OPENAI_API_KEY=YOUR_OPENAI_API_KEY
```

Note: Make sure to add .env to your .gitignore so you don’t accidentally commit your tokens.

### 4. Invite the Bot to Your Server

Go to the Discord Developer Portal, select your application.
Under OAuth2 → URL Generator, select the bot scope (and possibly applications.commands if you plan to add slash commands).
Choose the permissions your bot needs (e.g., Send Messages, Read Message History).
Copy and paste the generated URL into your browser to invite the bot to your server.

### 5. Run the Bot

```bash
node index.js
```

If everything is set up correctly, you should see:

```
🤖 Logged in as <YourBotName>#1234
```
in the terminal.

## Usage

### 1. In a Discord channel where the bot is present, type:

```
!create a happy cat wearing sunglasses
```

### 2. The bot will respond with: 
```
**Prompt:** a happy cat wearing sunglasses <image URL from DALL·E>
```

### 3. Clicking the link will open the generated image in your browser.

## File Structure


```slopbot/
├─ .env               # Your environment variables (NOT committed to Git)
├─ .gitignore         # Ignore node_modules, .env, etc.
├─ index.js           # Main bot file
├─ package.json       # Node.js package manifest
├─ package-lock.json
└─ node_modules/      # Installed dependencies
```

## Troubleshooting

- Configuration is not a constructor or createImage is not a function:
Make sure your openai package is up to date (npm list openai should show a 4.x version) and you’ve uninstalled older/conflicting libraries.

- Bot Not Responding:
Confirm that the bot has Message Content Intent enabled in the [Developer Portal → Bot settings → Privileged Gateway Intents].
Also ensure you’re typing the command correctly (!create <prompt>).

- Permissions:
If the bot can’t read or send messages, invite it again with the correct permissions or update its role in Server Settings.

## Contributing

1. Fork the repository.
2. Create your feature branch (git checkout -b feature/my-feature).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/my-feature).
5. Open a Pull Request.

## License

This project is licensed under the MIT License.
Feel free to modify it for your own personal or commercial use.