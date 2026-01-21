// Footer Data
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

document.getElementById('currentyear').textContent = currentYear;
document.getElementById('lastModified').textContent = `Last Modification: ${lastModified}`;

// Hamburger Menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hamButton.classList.toggle('open');
    const isExpanded = hamButton.classList.contains('open');
    hamButton.setAttribute('aria-expanded', isExpanded);
});
