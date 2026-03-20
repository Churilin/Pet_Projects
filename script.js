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