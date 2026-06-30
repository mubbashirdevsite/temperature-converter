// ==========================================
// Temperature Converter
// Author: M Mubbashir Idrees
// ==========================================

// ==============================
// Select Elements
// ==============================
const temperatureInput = document.getElementById("temperature");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");

const result = document.getElementById("result");
const formula = document.getElementById("formula");
const message = document.getElementById("message");

const swapBtn = document.getElementById("swapBtn");
const copyBtn = document.getElementById("copyBtn");
const resetBtn = document.getElementById("resetBtn");

// ==============================
// Event Listeners
// ==============================
temperatureInput.addEventListener("input", convertTemperature);
fromUnit.addEventListener("change", convertTemperature);
toUnit.addEventListener("change", convertTemperature);

swapBtn.addEventListener("click", swapUnits);
copyBtn.addEventListener("click", copyResult);
resetBtn.addEventListener("click", resetConverter);

// Initial formula
updateFormula();

// ==============================
// Convert Temperature
// ==============================
function convertTemperature() {

    const value = parseFloat(temperatureInput.value);

    if (temperatureInput.value.trim() === "") {

        result.textContent = "--";
        showMessage("Please enter a temperature.", "#ef4444");
        updateFormula();
        return;

    }

    if (isNaN(value)) {

        result.textContent = "--";
        showMessage("Invalid temperature value.", "#ef4444");
        return;

    }

    let converted = value;

    // Celsius conversions
    if (fromUnit.value === "celsius" && toUnit.value === "fahrenheit") {

        converted = (value * 9 / 5) + 32;

    } else if (fromUnit.value === "celsius" && toUnit.value === "kelvin") {

        converted = value + 273.15;

    }

    // Fahrenheit conversions
    else if (fromUnit.value === "fahrenheit" && toUnit.value === "celsius") {

        converted = (value - 32) * 5 / 9;

    } else if (fromUnit.value === "fahrenheit" && toUnit.value === "kelvin") {

        converted = ((value - 32) * 5 / 9) + 273.15;

    }

    // Kelvin conversions
    else if (fromUnit.value === "kelvin" && toUnit.value === "celsius") {

        converted = value - 273.15;

    } else if (fromUnit.value === "kelvin" && toUnit.value === "fahrenheit") {

        converted = ((value - 273.15) * 9 / 5) + 32;

    }

    // Same unit
    else {

        converted = value;

    }

    result.textContent = `${converted.toFixed(2)} ${getSymbol(toUnit.value)}`;

    updateFormula();

    showMessage("Conversion successful!", "#22c55e");
}

// ==============================
// Swap Units
// ==============================
function swapUnits() {

    const temp = fromUnit.value;

    fromUnit.value = toUnit.value;
    toUnit.value = temp;

    convertTemperature();
}

// ==============================
// Copy Result
// ==============================
async function copyResult() {

    if (result.textContent === "--") {

        showMessage("Nothing to copy.", "#ef4444");
        return;

    }

    try {

        await navigator.clipboard.writeText(result.textContent);

        showMessage("✅ Result copied successfully!", "#22c55e");

    } catch {

        showMessage("❌ Failed to copy.", "#ef4444");

    }

}

// ==============================
// Reset
// ==============================
function resetConverter() {

    temperatureInput.value = "";
    fromUnit.value = "celsius";
    toUnit.value = "fahrenheit";

    result.textContent = "--";

    updateFormula();

    showMessage("Converter reset.", "#6366f1");

}

// ==============================
// Update Formula
// ==============================
function updateFormula() {

    const from = fromUnit.value;
    const to = toUnit.value;

    let text = "No conversion required.";

    if (from === "celsius" && to === "fahrenheit") {

        text = "°F = (°C × 9/5) + 32";

    } else if (from === "fahrenheit" && to === "celsius") {

        text = "°C = (°F − 32) × 5/9";

    } else if (from === "celsius" && to === "kelvin") {

        text = "K = °C + 273.15";

    } else if (from === "kelvin" && to === "celsius") {

        text = "°C = K − 273.15";

    } else if (from === "fahrenheit" && to === "kelvin") {

        text = "K = (°F − 32) × 5/9 + 273.15";

    } else if (from === "kelvin" && to === "fahrenheit") {

        text = "°F = (K − 273.15) × 9/5 + 32";

    }

    formula.textContent = text;

}

// ==============================
// Temperature Symbol
// ==============================
function getSymbol(unit) {

    switch (unit) {

        case "celsius":
            return "°C";

        case "fahrenheit":
            return "°F";

        case "kelvin":
            return "K";

        default:
            return "";

    }

}

// ==============================
// Message
// ==============================
function showMessage(text, color) {

    message.textContent = text;
    message.style.color = color;

    clearTimeout(showMessage.timer);

    showMessage.timer = setTimeout(() => {

        message.textContent = "";

    }, 2000);

}