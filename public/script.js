const container = document.getElementById('cards-container');
const form = document.getElementById('addForm');

// Функция загрузки данных
async function loadAnimals() {
    const res = await fetch('/api/animals');
    const animals = await res.json();
    
    container.innerHTML = '';
    animals.forEach(animal => {
        const card = document.createElement('div');
        // Добавляем класс вида для стилизации
        card.className = `card species-${animal.species.toLowerCase()}`; 
        
        card.innerHTML = `
            <h3>${animal.name} <small>${animal.species}</small></h3>
            <p>${animal.description}</p>
        `;
        container.appendChild(card);
    });
}

// Обработка отправки формы
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const species = document.getElementById('species').value;
    const description = document.getElementById('description').value;

    await fetch('/api/animals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, species, description })
    });

    form.reset();
    loadAnimals();
});

// Загрузка при старте
loadAnimals();