let temp = document.querySelector("#temp");
let speed = document.querySelector("#speed");
let formula = 35.74 + 0.6215 * temp - 35.75 * speed ** 0.16 + 0.4275 * temp * speed ** 0.16;

if (temp <= 50 && speed > 3){
    F = formula.toFixed(1);
} else {
    F = "N/A";
}

document.querySelector("#windchill").innerHTML = F;