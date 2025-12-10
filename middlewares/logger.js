const requestLogger = (req, res, next) => {
    const date = new Date().toISOString();
    console.log(`[${date}] ${req.method} запрос на ${req.url}`);
    next(); // Важно! Передаем управление дальше
};

module.exports = requestLogger;