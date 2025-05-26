// Script pour créer une transition douce entre les pages

// Ajoute une classe d'entrée à l'ouverture
document.body.classList.add('fade-enter');

// Quand on clique sur un lien, on applique une animation avant de quitter
document.querySelectorAll('a[href]').forEach(link => {
  const href = link.getAttribute('href');

  // Ignorer les liens qui ouvrent dans un nouvel onglet
  if (link.target === '_blank' || href.startsWith('mailto:') || href.startsWith('tel:')) return;

  link.addEventListener('click', function (e) {
    e.preventDefault(); // Empêche le changement immédiat de page

    document.body.classList.add('fade-exit'); // Lance l'animation de sortie

    // Attend un peu (400ms), puis change de page
    setTimeout(() => {
      window.location.href = href;
    }, 400);
  });
});
