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

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        document.querySelector(".dark-mode-toggle").textContent = "☀️";
    }
});

function updatePlayerCount() {
    fetch("https://play-servers.com/web/online-9495.js") 
        .then(response => response.json())
        .then(data => {
            document.getElementById("player-count").textContent = data.players;
        })
        .catch(() => {
            document.getElementById("player-count").textContent = "Tidak Tersedia";
        });
}

setInterval(updatePlayerCount, 30000);
updatePlayerCount();