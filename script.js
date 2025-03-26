const serverIP = "202.10.41.204"; // Ganti dengan IP server SA-MP Anda
const serverPort = "7779"; // Ganti dengan port server Anda

async function fetchPlayerCount() {
    try {
        const response = await fetch(`https://api.samp-api.com/v1/status/${serverIP}:${serverPort}`);
        const data = await response.json();
        
        if (data && data.online) {
            document.getElementById('player-count').innerText = `${data.players} / ${data.maxPlayers}`;
        } else {
            document.getElementById('player-count').innerText = "Server Offline";
        }
    } catch (error) {
        document.getElementById('player-count').innerText = "Gagal mengambil data";
    }
}

// Ambil data pertama kali dan update setiap 10 detik
fetchPlayerCount();
setInterval(fetchPlayerCount, 10000);