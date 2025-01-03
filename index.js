require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');
const OpenAI = require('openai');

// 1. Configure OpenAI
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

// 2. Configure Discord client
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds, 
    IntentsBitField.Flags.GuildMessages, 
    IntentsBitField.Flags.MessageContent
  ],
});

// 3. On bot ready
client.once('ready', () => {
  console.log(`🤖 Logged in as ${client.user.tag}`);
});

// 4. Message listener
client.on('messageCreate', async (message) => {
  // Ignore messages from the bot itself or other bots
  if (message.author.bot) return;

  // We'll use a simple command trigger: !create
  if (message.content.startsWith('!create')) {
    const prompt = message.content.replace('!create', '').trim();

    if (!prompt) {
      return message.reply('Please provide a prompt: `!create <your prompt>`');
    }

    try {
      // Generate the image via OpenAI
      const response = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: '512x512',
      });

      const imageUrl = response.data.data[0].url;

      // Send the image URL in Discord
      await message.channel.send(`**Prompt:** ${prompt}\n${imageUrl}`);
    } catch (error) {
      console.error('Error generating image:', error);
      await message.channel.send('Sorry, something went wrong while generating the image.');
    }
  }
});

// 5. Log into Discord
client.login(process.env.DISCORD_TOKEN);