function appendValue(value) {
  const display = document.getElementById("input");
  display.value += value;
}

let display = document.getElementById("input");

// Append number or operator to display
function appendValue(value) {
  display.value += value;
}

// Clear display
function clearDisplay() {
  display.value = "";
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
  try {
    // eval evaluates the string as JavaScript expression
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
