
const btnMore = document.querySelector('#showMore');
const textMore = document.querySelector('#moreText');

if (btnMore && textMore) {
    btnMore.addEventListener('click', () => {

        textMore.classList.toggle('hidden');

        if (textMore.classList.contains('hidden')) {
            btnMore.textContent = 'Подробнее';
        } else {
            btnMore.textContent = 'Скрыть';
        }
    });
}

const form = document.querySelector('#contactForm');
const formMessage = document.querySelector('#formMessage');

if (form && formMessage) {
    form.addEventListener('submit', (event) => {

        event.preventDefault();

        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const comment = document.querySelector('#comment').value;

        // Проверка: заполнены ли поля
        if (!name || !email || !comment) {
            formMessage.textContent = 'Пожалуйста, заполните все поля!';
            formMessage.style.color = 'red';
            return;
        }

        if (!email.includes('@')) {
            formMessage.textContent = 'Проверьте правильность email (должен быть символ @)';
            formMessage.style.color = 'red';
            return;
        }


        formMessage.textContent = 'Спасибо, ' + name + '! Ваше сообщение отправлено.';
        formMessage.style.color = 'green';
        form.reset();
    });
}