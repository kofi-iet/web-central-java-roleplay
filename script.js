// Smooth scrolling untuk navigasi
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

// Efek scroll animasi
const sections = document.querySelectorAll('section');

const revealSection = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }
    });
};

window.addEventListener('scroll', revealSection);
document.addEventListener('DOMContentLoaded', revealSection);

// Fetch jumlah pemain online (butuh API server SAMP)
async function fetchPlayerCount() {
    try {
        let response = await fetch('https://api.samp-server.com/?ip=yourserverip&port=yourserverport');
        let data = await response.json();
        document.querySelector("#player-count span").textContent = data.players;
    } catch (error) {
        document.querySelector("#player-count span").textContent = "Tidak tersedia";
    }
}

// Jalankan fungsi saat halaman dimuat
fetchPlayerCount();