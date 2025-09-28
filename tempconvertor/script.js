function convertCelsiusToFahrenheit() {
    let celsius = parseFloat(document.getElementById('temperature').value);
    if (!isNaN(celsius)) {
        let fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('result').textContent = fahrenheit.toFixed(2) + '°F';
    } else {
        document.getElementById('result').textContent = 'Invalid Input';
    }
}

function convertFahrenheitToCelsius() {
    let fahrenheit = parseFloat(document.getElementById('temperature').value);
    if (!isNaN(fahrenheit)) {
        let celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('result').textContent = celsius.toFixed(2) + '°C';
    } else {
        document.getElementById('result').textContent = 'Invalid Input';
    }
}
