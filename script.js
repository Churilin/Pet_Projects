document.addEventListener('DOMContentLoaded', function() {
    console.log('Сайт загружен и готов к работе!');
    
});

document.addEventListener('DOMContentLoaded', function() {
    
    // === ИНТЕРАКТИВНОЕ ПРИВЕТСТВИЕ ===
    const greetBtn = document.getElementById('greetBtn');
    const greetMessage = document.getElementById('greetMessage');
    
    greetBtn.addEventListener('click', function() {
        const now = new Date();
        const hours = now.getHours();
        
        let greeting;
        if (hours < 12) {
            greeting = 'Доброе утро';
        } else if (hours < 18) {
            greeting = 'Добрый день';
        } else {
            greeting = 'Добрый вечер';
        }
        
        greetMessage.textContent = `${greeting}! Рад видеть вас на моем сайте!`;
        greetMessage.classList.add('show');
        
        // Добавляем небольшую анимацию для кнопки
        greetBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            greetBtn.style.transform = 'scale(1)';
        }, 200);
    });
    
});

document.addEventListener('DOMContentLoaded', function() {
    
    // === СЧЕТЧИК ПОСЕЩЕНИЙ ===
    function updateVisitCounter() {
        // Получаем текущее значение счетчика из localStorage
        let visits = localStorage.getItem('visitCount');
        
        if (visits === null) {
            // Первое посещение
            visits = 1;
        } else {
            // Преобразуем строку в число и увеличиваем
            visits = parseInt(visits) + 1;
        }
        
        // Сохраняем новое значение
        localStorage.setItem('visitCount', visits);
        
        // Создаем или обновляем элемент на странице
        let counterEl = document.getElementById('visitCounter');
        if (!counterEl) {
            // Если элемента нет, создаем его в футере
            const footer = document.querySelector('footer');
            counterEl = document.createElement('p');
            counterEl.id = 'visitCounter';
            counterEl.style.marginTop = '0.5rem';
            counterEl.style.fontSize = '0.9rem';
            counterEl.style.opacity = '0.8';
            footer.appendChild(counterEl);
        }
        
        counterEl.textContent = `Вы посетили этот сайт ${visits} раз(а)`;
    }
    
    // Вызываем функцию
    updateVisitCounter();
    
});