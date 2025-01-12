let card_social_links = document.getElementById('card-social-links');

links = [ "GitHub", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"];

links.forEach(social_link => {
    // Crea el botón 
    let button = document.createElement('button');
    button.type = 'button'
    button.textContent = social_link;
    button.classList.add('social-btn');

    // Añade el botón al div 
    card_social_links.appendChild(button);
});
