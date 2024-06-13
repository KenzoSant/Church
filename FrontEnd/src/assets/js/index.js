// Arquivo: scrollToTop.js

document.addEventListener('DOMContentLoaded', function () {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    var rootElement = document.documentElement;

    function handleScroll() {
        // Quando o usuário rolar para baixo 20px a partir do topo do documento, mostre o botão
        if (rootElement.scrollTop > 20) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    }

    function scrollToTop() {
        // Rolagem suave para o topo
        rootElement.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    scrollToTopBtn.addEventListener('click', scrollToTop);
    document.addEventListener('scroll', handleScroll);
});
