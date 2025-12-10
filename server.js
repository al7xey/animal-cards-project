const express = require('express');
const app = express();
const path = require('path');

const animalRoutes = require('./routes/animals.routes');
const logger = require('./middlewares/logger');

const PORT = 3000;

// 1. Встроенные Middleware для парсинга тела запроса
app.use(express.json()); // для application/json
app.use(express.urlencoded({ extended: true })); // для application/x-www-form-urlencoded

// 2. Раздача статических файлов (HTML, CSS, JS) из папки public
app.use(express.static(path.join(__dirname, 'public')));

// 3. Подключение собственного middleware
app.use(logger);

// 4. Подключение маршрутов API
app.use('/api/animals', animalRoutes);

// Обработка 404 для неизвестных маршрутов
app.use((req, res) => {
    res.status(404).send('Страница не найдена');
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен: http://localhost:${PORT}`);
});