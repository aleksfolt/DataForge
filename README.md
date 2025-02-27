# DataForge - Telegram Bot for API Integration

DataForge is a powerful Telegram bot built with grammY and TypeScript that helps connect and transform API services. The bot allows users to connect any API service, test connections in real-time, and format data responses into readable text.

## ✨ Features

- 🌐 **API Integration**: Connect to any API service via URL
- 🔄 **Real-time Testing**: Test API connections instantly
- 📊 **Data Formatting**: Transform complex JSON responses into readable text
- 📱 **Multi-platform**: Works in private chats and group conversations
- 🌍 **Multilingual Support**: Built-in i18next internationalization
- 🔐 **Admin Management**: Automatic admin detection and permission handling
- 🗄️ **Database Integration**: MongoDB support for storing chat and user data
- ⚙️ **YAML Configuration**: Simple configuration through YAML files

## 📋 Requirements

- Node.js (LTS version recommended)
- MongoDB
- Telegram Bot Token (from [@BotFather](https://t.me/BotFather))

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ApiBot.git
cd ApiBot
```

2. Install dependencies:
```bash
npm install
```

3. Create a `config.yaml` file in the root directory:
```yaml
Bot:
  botToken: "YOUR_BOT_TOKEN"
database:
  host: "localhost"
  port: 27017
  name: "dataforge"
  username: "username" # Optional
  password: "password" # Optional
```

## 🏃‍♂️ Running the Bot

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm run build
npm start
```

## 🏗️ Project Structure

- `/src` - Source code
  - `/commands` - Bot commands
    - `/callbacks` - Callback query handlers
    - `keyboards.ts` - Inline keyboard generators
    - `start.ts` - Start command handler
  - `/database` - Database integration
    - `/models` - Mongoose models
    - `/services` - Database service functions
    - `connection.ts` - Database connection setup
  - `/handlers` - Event handlers
  - `config.ts` - Configuration loader
  - `types.ts` - TypeScript type definitions
  - `index.ts` - Application entry point
- `/locales` - Internationalization files
- `/dist` - Compiled JavaScript code

## 💬 Bot Usage

### Private Chat

1. Start the bot with `/start`
2. View your available chats where you have admin privileges
3. Select a chat to manage API integrations

### Group Chat

1. Add the bot to your group
2. Grant administrator privileges to the bot
3. The bot will automatically detect admins with appropriate permissions
4. Configure the bot in private messages for your group

## 🧩 Key Components

### Chat Management

The bot automatically tracks chat membership and admin status changes:
- Detects when it's added to a group
- Monitors admin privilege changes
- Maintains a list of authorized admins

### Database Structure

- **Chat Model**: Stores information about chats where the bot is present
  - `chatId`: Unique identifier for the chat
  - `isActive`: Whether the bot is active in the chat
  - `globalAdmins`: List of admin user IDs
  - `title`: Chat title/name

## 📦 Dependencies

### Core
- grammy: ^1.35.0 - Telegram Bot API framework
- i18next: ^22.4.7 - Internationalization framework
- i18next-fs-backend: ^2.2.1 - File system backend for i18next
- js-yaml: ^4.1.0 - YAML parser and serializer
- mongoose: ^8.11.0 - MongoDB object modeling
- pg: ^8.11.0 - PostgreSQL client

### Development
- typescript: ^5.7.3
- ts-node: ^10.9.1
- tsconfig-paths: ^4.2.0
- @types/node: ^16.18.0
- @types/js-yaml: ^4.0.9

## 📄 License

MPL-2.0 license