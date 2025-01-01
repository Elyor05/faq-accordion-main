document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faq = question.parentElement;
        faq.classList.toggle('active');
        const imgElement = question.querySelector('.image');
        if (imgElement.getAttribute('src') === 'assets/images/icon-plus.svg') {
            imgElement.setAttribute('src', 'assets/images/icon-minus.svg');
        }
        else {
            imgElement.setAttribute('src', 'assets/images/icon-plus.svg');
        }
    });

    question.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const faq = question.parentElement;
            faq.classList.toggle('active');
        }
    });
});