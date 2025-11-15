function runClock() {
    const clock = document.getElementById("clock")
    const current = new Date();
    const hours = current.getHours().toString().padStart(2, 0);
    const minutes = current.getMinutes().toString().padStart(2, 0);
    const seconds = current.getSeconds().toString().padStart(2, 0);
    const display = `${hours}:${minutes}:${seconds}`;

    clock.textContent = display;
}

runClock();
setInterval(runClock, 1000);