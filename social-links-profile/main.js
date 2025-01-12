let card_social_links = document.getElementById('card-social-links');

links = [
    {
        name: "GitHub",
        link: "#"
    },
    {
        name: "Frontend Mentor",
        link: "#"
    },
    {
        name: "LinkedIn",
        link: "#"
    },
    {
        name: "Twitter",
        link: "#"
    },
    {
        name: "Instagram",
        link: "#"
    }
]

links.forEach(social_link => {
    // Crea el botón 
    let button = document.createElement('button');
    button.type = 'button';
    button.classList.add('social-btn');

    // Crea el anchor 
    let anchor = document.createElement('a');
    anchor.href = social_link.link;
    anchor.textContent = social_link.name;

    // Añade el anchor al botón 
    button.appendChild(anchor);

    // Añade el botón al div 
    card_social_links.appendChild(button);
});
