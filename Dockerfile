FROM node:20-alpine

WORKDIR /app

# Устанавливаем зависимости
COPY package.json package-lock.json ./
RUN npm ci

# Копируем проект
COPY . .

# Vite dev-server (обычно 5173, но у тебя может отличаться)
EXPOSE 5173

# Запуск без сборки, в dev-режиме, с доступом извне контейнера
CMD ["sh", "-lc", "node log.js dev & vite --config vite/config.dev.mjs --host 0.0.0.0 --port 5173"]
