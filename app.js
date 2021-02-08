//attach DOM elements
const baseCurrEl = document.getElementById('base');
const ammountEl = document.getElementById('ammount');
const targetCurrEl = document.getElementById('target');
const submitBtn = document.getElementById('convert-button')

//define api key
const apiKey = 'd7b589eba6b47d2a4fafcf52'

//add event for clicking button
submitBtn.addEventListener('click', ()=>convert());

//convert function
const convert=()=>{
    //get params for api 
    const params = getValues();
    const [base,ammout,target] = [...params]
    //construct url
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${base}/${target}`;
    //fetch data from API
    fetchData(url);
}

function getValues(){
    const values = [];
    values.push(baseCurrEl.value);
    values.push(ammountEl.value);
    values.push(targetCurrEl.value);
    return values;
}
async function fetchData(url){
    const response = await fetch(url);
    const data= await response.json();
    console.log(data);
}