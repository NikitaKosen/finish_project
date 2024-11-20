document.getElementById('loginButton').addEventListener('click', function() {
    // Здесь мы будем проверять права пользователя
    const hasAccessRights = checkUserRights(); // Эта функция должна проверить права пользователя

    if (hasAccessRights) {
        // Если права есть, меняем цвет кнопки на зеленый
        this.classList.add('green');
        this.classList.remove('red');

        // Через 2 секунды перенаправляем на другую страницу
        setTimeout(() => {
            window.location.href = 'another-page.html'; // Укажите здесь URL другой страницы
        }, 200);
    } else {
        // Если прав нет, меняем цвет кнопки на красный
        this.classList.add('red');
        this.classList.remove('green');
    }
});

// Функция для проверки прав пользователя
function checkUserRights() {
    // Здесь вы можете реализовать свою логику проверки прав
    // Например, просто возвращаем true или false для демонстрации
    // Замените это на вашу логику проверки
    return Math.random() < 0.5; // Пример: 50% шанс на наличие прав
}