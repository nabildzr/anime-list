const titleHero = (document.querySelector(".title-body").innerHTML = `
    <div class="hero-text">
        <div class="hero-title">Welcome to Anime List</div>
            <p class="hero-subtitle">Find your favorite anime and manga here</p>
        </div>
        <div class="hero-filter">
            <a href="">
                <button class="btn-filter">Filter & Search</button>
            </a>
        </div>
    </div> 
`);


if (window.location.href.includes("manga.html")) {
    // Correctly select the .hero-title element to update its text
    const heroTitle = document.querySelector(".hero-title");
    if (heroTitle) {
        heroTitle.textContent = "Welcome to Manga List";
    }
}