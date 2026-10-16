const conversionForm = document.querySelector('#converter-form');
const temperatureInput = document.querySelector('#temperature');
const sourceUnit = document.querySelector('#from-unit');
const targetUnit = document.querySelector('#to-unit');
const resultOutput = document.querySelector('#result');
const messageOutput = document.querySelector('#conversion-message');
const clearButton = document.querySelector('#clear-form');
const swapButton = document.querySelector('#swap-units');

const absoluteZero = {
  celsius: -273.15,
  fahrenheit: -459.67,
  kelvin: 0
};

const symbols = {
  celsius: '°C',
  fahrenheit: '°F',
  kelvin: 'K'
};

function toCelsius(value, unit) {
  if (unit === 'fahrenheit') return (value - 32) * 5 / 9;
  if (unit === 'kelvin') return value - 273.15;
  return value;
}

function fromCelsius(value, unit) {
  if (unit === 'fahrenheit') return value * 9 / 5 + 32;
  if (unit === 'kelvin') return value + 273.15;
  return value;
}

function showMessage(message) {
  messageOutput.textContent = message;
}

conversionForm.addEventListener('submit', (event) => {
  event.preventDefault();
  showMessage('');

  const value = temperatureInput.valueAsNumber;
  const source = sourceUnit.value;
  const target = targetUnit.value;

  if (temperatureInput.value.trim() === '' || !Number.isFinite(value)) {
    showMessage('Enter a valid numeric temperature.');
    temperatureInput.focus();
    return;
  }

  if (value < absoluteZero[source]) {
    showMessage(`The minimum valid value for ${sourceUnit.selectedOptions[0].text} is ${absoluteZero[source]} ${symbols[source]}.`);
    temperatureInput.focus();
    return;
  }

  const converted = fromCelsius(toCelsius(value, source), target);
  const rounded = Object.is(converted, -0) ? 0 : converted;
  resultOutput.classList.remove('is-empty');
  resultOutput.textContent = `${value.toLocaleString(undefined, { maximumFractionDigits: 8 })} ${symbols[source]} = ${rounded.toFixed(2)} ${symbols[target]}`;
});

swapButton.addEventListener('click', () => {
  const previousSource = sourceUnit.value;
  sourceUnit.value = targetUnit.value;
  targetUnit.value = previousSource;
  showMessage('');
});

conversionForm.addEventListener('reset', () => {
  showMessage('');
  resultOutput.classList.add('is-empty');
  resultOutput.textContent = 'Enter a value to begin';
});

clearButton.addEventListener('click', () => temperatureInput.focus());
