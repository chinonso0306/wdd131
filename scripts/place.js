const temp = 30; // °C
const wind = 10; // km/h

function calculateWindChill(t, v) {
  return (
    13.12 +
    0.6215 * t -
    11.37 * Math.pow(v, 0.16) +
    0.3965 * t * Math.pow(v, 0.16)
  );
}

let chill = "N/A";

// Wind chill conditions (Metric)
if (temp <= 10 && wind > 4.8) {
  chill = calculateWindChill(temp, wind).toFixed(1);
}

document.getElementById("chill").textContent = chill;

// FOOTER INFO
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;