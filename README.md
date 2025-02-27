# Telegram Bot на grammY

Этот бот представляет собой шаблон Telegram бота, написанный на TypeScript с использованием фреймворка grammY. Бот включает в себя систему интернационализации, интеграцию с базой данных и обработку команд.

## Основные возможности

- 🌍 Мультиязычность (i18next)
- 📦 TypeScript
- 🗄️ Интеграция с базами данных (MongoDB и PostgreSQL)
- 🔄 Обработка административных действий в группах
- ⚙️ Конфигурация через YAML

## Требования

- Node.js (рекомендуется последняя LTS версия)
- MongoDB или PostgreSQL (в зависимости от конфигурации)

## Установка

1. Клонируйте репозиторий:
```bash
git clone [url-репозитория]
cd [название-папки]
```

2. Установите зависимости:
```bash
npm install
```

3. Создайте и настройте файл конфигурации `config.yaml`:
```yaml
bot:
  token: "ВАШ_ТОКЕН_БОТА"
database:
  type: "mongodb" # или "postgresql"
  url: "URL_ПОДКЛЮЧЕНИЯ_К_БД"
```

## Запуск

### Разработка

```bash
npm run dev
```

### Продакшн

```bash
npm run build
npm start
```

## Структура проекта

- `/src` - исходный код
  - `/database` - работа с базой данных
  - `/handlers` - обработчики событий бота
  - `config.ts` - конфигурация
  - `types.ts` - типы TypeScript
  - `index.ts` - точка входа
- `/locales` - файлы локализации
- `/dist` - скомпилированный код

## Зависимости

### Основные
- grammy: ^1.35.0
- i18next: ^22.4.7
- mongoose: ^8.11.0
- pg: ^8.11.0

### Разработка
- typescript: ^5.7.3
- ts-node: ^10.9.1
- другие dev-зависимости

## Лицензия

MPL-2.0 license 