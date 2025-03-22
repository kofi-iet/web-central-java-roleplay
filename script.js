// Menu Hamburger
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
});

// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

// Fetch Jumlah Pemain
async function fetchPlayerCount() {
    try {
        let response = await fetch('https://api.samp-server.com/?ip=yourserverip&port=yourserverport');
        let data = await response.json();
        document.querySelector("#player-count span").textContent = data.players;
    } catch (error) {
        document.querySelector("#player-count span").textContent = "Tidak tersedia";
    }
}

fetchPlayerCount();