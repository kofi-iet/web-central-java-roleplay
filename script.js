function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

function toggleDarkMode() {
    document.body.classList.toggle("light-mode");

    let icon = document.querySelector(".dark-mode-toggle");
    if (document.body.classList.contains("light-mode")) {
        icon.textContent = "☀️";
        localStorage.setItem("theme", "light");
    } else {
        icon.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    }
}

// Simpan tema setelah reload
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        document.querySelector(".dark-mode-toggle").textContent = "☀️";
    }
});

// Player Count Live
function updatePlayerCount() {
    fetch("https://api.example.com/playercount")  // Ganti dengan API server SAMP
        .then(response => response.json())
        .then(data => {
            document.getElementById("player-count").textContent = data.players;
        })
        .catch(() => {
            document.getElementById("player-count").textContent = "Tidak Tersedia";
        });
}

// Perbarui setiap 30 detik
setInterval(updatePlayerCount, 30000);
updatePlayerCount();