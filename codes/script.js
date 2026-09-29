// 1. Défilement fluide pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 2. Base pour connecter Sanity quand tu seras prêt
// Cette fonction récupère tes projets depuis ton Studio Sanity via leur API HTTP.
// Tu auras juste à remplacer "TON_PROJECT_ID" par l'ID fourni par Sanity.

const SANITY_PROJECT_ID = 'TON_PROJECT_ID'; // ex: 'a1b2c3d4'
const SANITY_DATASET = 'production';

// Fonction commentée pour l'instant pour ne pas générer d'erreur dans ta console
/*
async function fetchSanityProjects() {
    // Requête GROQ qui demande tous les documents de type "project"
    const query = encodeURIComponent('*[_type == "project"]{title, description, "imageUrl": mainImage.asset->url}');
    const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v2022-03-07/data/query/${SANITY_DATASET}?query=${query}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const projects = data.result;
        
        // Cible la grille HTML
        const grid = document.getElementById('portfolio-grid');
        grid.innerHTML = ''; // Vide les cartes factices
        
        // Génère le HTML pour chaque projet venant de Sanity
        projects.forEach(project => {
            const cardHTML = `
                <article class="card">
                    <div class="card-image-wrapper" style="background-image: url('${project.imageUrl}'); background-size: cover; background-position: center;">
                    </div>
                    <div class="card-content">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                    </div>
                </article>
            `;
            grid.innerHTML += cardHTML;
        });

    } catch (error) {
        console.error("Erreur de connexion avec Sanity:", error);
    }
}

// Appeler la fonction au chargement de la page
// fetchSanityProjects();
*/