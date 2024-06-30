//Fetch API from public API
async function fetchExchangeRates() {
    try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
        return response.data.rates;
    } catch (error) {
        throw new Error('Failed to fetch exchange rates');
    }
}

//Convert Currency Async Function
async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const resultElement = document.getElementById('result');

    if (!amount || isNaN(amount)) {
        resultElement.textContent = 'Please enter a valid amount';
        return;
    }

    try {
        const rates = await fetchExchangeRates();
        const convertedAmount = (amount / rates[fromCurrency]) * rates[toCurrency];
        resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    } catch (error) {
        resultElement.textContent = error.message;
    }
}

// Recursion Function: Calculate factorial
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log(`Factorial of 5: ${factorial(5)}`);

// ES6 array 
const currencies = ['USD', 'EUR', 'GBP', 'BRL', 'JPY'];
const upperCaseCurrencies = currencies.map(currency => currency.toUpperCase());
console.log(upperCaseCurrencies);