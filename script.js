
const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');
const overlay = document.querySelector('.overlay');


burgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    overlay.classList.toggle('active');
});

// Fermer le menu en cliquant sur l'overlay
overlay.addEventListener('click', () => {
    navMenu.classList.remove('active');
    burgerMenu.classList.remove('active');
    overlay.classList.remove('active');
});

// Fermer le menu en cliquant sur un lien
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        burgerMenu.classList.remove('active');
        overlay.classList.remove('active');
    });
});

const textContent = document.getElementById('textContent');
const voirPlusBtn = document.getElementById('voirPlusBtn'); 
const fadeOverlay = document.getElementById('fadeOverlay');

voirPlusBtn.addEventListener('click', function(event) {
    event.preventDefault(); // AJOUTEZ CETTE LIGNE
    event.stopPropagation();
    if (textContent.classList.contains('expanded')){
        textContent.classList.remove('expanded');
        fadeOverlay.classList.remove('hidden'); 
        voirPlusBtn.textContent = 'Voir plus'; 
        window.scrollTo({ top: 0, behavior: 'smooth'});
    } else{
        textContent.classList.add('expanded');
        fadeOverlay.classList.add('hidden'); 
        voirPlusBtn.textContent = 'voir moins'; 
    }
});