const rateform = document.getElementById('calculate')
const principal = document.getElementById('principal')
const rate = document.getElementById('rate')
const time = document.getElementById('time')

rateform.addEventListener('click', calculateInterest);

function calculateInterest() {
    const principalvalue = parseFloat(principal.value);
    const ratevalue = parseFloat(rate.value);
    const timevalue = parseFloat(time.value);
    if (isNaN(principalvalue) || isNaN(ratevalue) || isNaN(timevalue)) {
        alert('Please enter valid numbers for Principal, Rate, and Time');
        return;
    }

    const interest = (principalvalue * ratevalue * timevalue) / 100;
    document.getElementById('result').value = interest.toFixed(2);
}
