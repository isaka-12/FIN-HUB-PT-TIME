document.getElementById('calculate').addEventListener('click', function() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        alert('Please enter valid numbers for Principal, Rate, and Time');
        return;
    }

    const interest = (principal * rate * time) / 100;
    document.getElementById('result').value = interest.toFixed(2);
});
