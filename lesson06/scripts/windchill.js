let temp = parseFloat(document.querySelector("#temp").textContent);
let speed = parseFloat(document.querySelector("#speed").textContent);
let formula = 35.74 + 0.6215 * temp - 35.75 * speed ** 0.16 + 0.4275 * temp * speed ** 0.16;

if (temp <= 50 && speed > 3){
    windChill = formula.toFixed(1);
} else {
    windChill = "N/A";
}

document.querySelector("#windchill").innerHTML = windChill;