const botaoMenu = document.querySelector('.menu-toggle');
const menu = document.querySelector('.navbar');

botaoMenu.addEventListener('click', () => {
    const aberto = menu.classList.toggle('ativo');
    botaoMenu.setAttribute('aria-expanded', aberto);
});

menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        menu.classList.remove('ativo');
        botaoMenu.setAttribute('aria-expanded', 'false');
    });
});