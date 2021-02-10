//attach DOM elements
const baseCurrEl = document.getElementById('base');
const ammountEl = document.getElementById('ammount');
const targetCurrEl = document.getElementById('target');
const submitBtn = document.getElementById('convert-button');
const resultEl = document.getElementById('result');

//define api key
const apiKey = 'd7b589eba6b47d2a4fafcf52';

//add event for clicking button
submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const values = [];
    collectValues(values);
    const [baseCurrency, targetCurrency, ammount] = values;
    fetchData(baseCurrency, targetCurrency)
        .then(data=>{
            const conversionRate = data.conversion_rate;
            const result = convert(ammount, conversionRate).toFixed(2);
            displayResult(result, targetCurrency);
        })
    
});

async function fetchData(baseCurrency,targetCurrency){
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${baseCurrency}/${targetCurrency}`);
    const data = await response.json();    
    return data;
    
}

function convert(ammount, conversionRate) {
    console.log(ammount);
    console.log(conversionRate);
    return ammount*conversionRate;
}

function collectValues(values){
    values.push(baseCurrEl.value)
    values.push(targetCurrEl.value)
    values.push(ammountEl.value)
}

function displayResult(result, currency){
    resultEl.innerText = `After convertion you will receive ${result} ${currency}.`
}