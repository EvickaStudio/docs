---
title: Configuration
description: Configuration for Moodle Mate
---

## Configuration

Configuring Moodle Mate is essential to tailor the application to your specific needs. Below is a detailed guide on how to set up your `config.ini` file.

### Configuration File Structure

The `config.ini` file contains several sections and keys that you need to configure. Here's a breakdown of each section and its purpose:

#### Moodle Configuration

This section contains the credentials and URL for your Moodle instance.

```ini
[moodle]
moodleUrl = YOUR_MOODLE_URL
username = YOUR_USERNAME
password = YOUR_PASSWORD
```

#### OpenAI Configuration

If you are using OpenAI's services for summarization, provide your API key here.

```ini
openaikey = YOUR_OPENAI_API_KEY
```

#### Pushbullet Configuration

Configure Pushbullet if you want to receive notifications on your devices.

```ini
pushbulletkey = YOUR_PUSHBULLET_API_KEY
pushbulletState = 1  # Set to 1 to enable, 0 to disable
```

#### Discord Webhook Configuration

For sending notifications directly to a Discord channel through webhooks.

```ini
webhookState = 1  # Set to 1 to enable, 0 to disable
webhookUrl = YOUR_DISCORD_WEBHOOK_URL
```

#### System Message Configuration

Customize the message that the llm uses to summarize incoming messages.

```ini
systemmessage = "Your custom system message here"
```

Example: `systemmessage = "You are an assistant. Your task is to succinctly summarize incoming messages."`

#### Model Configuration

Specify the model used for generating summaries or responses.

```ini
model = gpt-4o  # or any other model you prefer
```

#### Additional Settings

Here you can configure other aspects like whether to use fakeopen API or not, and the bot's name.

```ini
fakeopen = 0  # 0 to disable (recommended, as it`s currently not maintained)
summary = 1  # Set to 1 to enable summarization, 0 to disable
botname = MoodleMate # Display name for the bot on Discord
thumbnailURL = YOUR_THUMBNAIL_URL # URL for the bot's thumbnail image
```

### Example Configuration

Here is an example of how your `config.ini` might look:

```ini
[moodle]
moodleUrl = https://example.moodle.com
username = exampleUser
password = examplePass

[api]
openaikey = exampleKey
pushbulletkey = examplePKey
pushbulletState = 1
webhookState = 1
webhookUrl = https://discord.com/api/webhooks/exampleWebhook
systemmessage = "You are an assistant. Your task is to succinctly summarize incoming messages."
model = gpt-4o
fakeopen = 0
summary = 1
botname = MoodleMate
thumbnailURL = https://example.com/image.png
```

### Tips for Configuration

- **Security**: Keep your `config.ini` file secure, especially if it contains sensitive information like passwords or API keys.
- **Updates**: Check for updates in the Moodle Mate documentation to see if new configuration options are available.

This configuration guide should help you set up Moodle Mate to work efficiently within your environment.
