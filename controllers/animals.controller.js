// Имитация базы данных
let animals = [
    { id: 1, name: "Рыжий", species: "cat", description: "Любит спать на солнце" },
    { id: 2, name: "Бобик", species: "dog", description: "Очень активный и громкий" },
    { id: 3, name: "Кеша", species: "parrot", description: "Умеет говорить 'Привет'" }
];

// Получить всех животных (с поддержкой фильтрации через req.query)
exports.getAllAnimals = (req, res) => {
    // Работа с query-параметрами (например: /api/animals?species=cat)
    const { species } = req.query;
    
    if (species) {
        const filtered = animals.filter(a => a.species === species);
        return res.json(filtered);
    }
    
    res.json(animals);
};

// Получить одно животное по ID (работа с req.params)
exports.getAnimalById = (req, res) => {
    const id = parseInt(req.params.id);
    const animal = animals.find(a => a.id === id);

    if (!animal) {
        return res.status(404).json({ message: "Животное не найдено" });
    }

    res.json(animal);
};

// Создать новую карточку (работа с req.body)
exports.createAnimal = (req, res) => {
    const { name, species, description } = req.body;

    if (!name || !species) {
        return res.status(400).json({ message: "Поля 'name' и 'species' обязательны" });
    }

    const newAnimal = {
        id: animals.length + 1,
        name,
        species,
        description: description || "Описание отсутствует"
    };

    animals.push(newAnimal);
    res.status(201).json(newAnimal);
};