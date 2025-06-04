function updateTime() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    // Saniyeleri ayrı span içine alıyoruz
    document.getElementById("current-time").innerHTML = 
        `${hours}:${minutes}:<span class="seconds">${seconds}</span>`;

    // Animasyonu tetiklemek için animasyon sınıfını yeniden başlat
    const secondsSpan = document.querySelector("#current-time .seconds");
    secondsSpan.style.animation = 'none';
    // animasyonu tekrar tetikle
    void secondsSpan.offsetWidth; // trigger reflow
    secondsSpan.style.animation = null;
}

function updateDate() {
    const now = new Date();
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = now.toLocaleDateString("tr-TR", options);
    document.getElementById("current-date").textContent = formattedDate;
}

updateTime();
updateDate();
setInterval(updateTime, 1000);
