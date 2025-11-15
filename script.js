function runClock() {
    const clock = document.getElementById("clock")
    const current = new Date();
    let hours = current.getHours();
    const meridian = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0)
    const minutes = current.getMinutes().toString().padStart(2, 0);
    const seconds = current.getSeconds().toString().padStart(2, 0);
    const display = `${hours}:${minutes}:${seconds} ${meridian}`;

    clock.textContent = display;
}

runClock();
setInterval(runClock, 1000);