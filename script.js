function convertToF() {
    let celsius = document.getElementById("temperature").value;
    if (celsius === "") {
        document.getElementById("result").innerHTML = "Please enter a value.";
        return;
    }
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("result").innerHTML = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
}

function convertToC() {
    let fahrenheit = document.getElementById("temperature").value;
    if (fahrenheit === "") {
        document.getElementById("result").innerHTML = "Please enter a value.";
        return;
    }
    let celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("result").innerHTML = `${fahrenheit}°F is ${celsius.toFixed(2)}°C`;
}
