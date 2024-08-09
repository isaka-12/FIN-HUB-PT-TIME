const rateform = document.getElementById('calculate')
const principal = document.getElementById('principal')
const rate = document.getElementById('rate')
const time = document.getElementById('time')
const output =document.getElementById('result')

rateform.addEventListener('click', calculateInterest);

function calculateInterest() {
    const principalvalue = parseFloat(principal.value);
    const ratevalue = parseFloat(rate.value);
    const timevalue = parseFloat(time.value);
    if (isNaN(principalvalue) || isNaN(ratevalue) || isNaN(timevalue)) {
      output.value ='Please enter valid numbers';
        return;
    }

    const interest = (principalvalue * ratevalue * timevalue) / 100;
    output.value = interest.toFixed(2);
}
