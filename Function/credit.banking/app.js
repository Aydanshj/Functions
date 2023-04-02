var total = 0;
var monthly = 0;
function Crd(){
    var amount =parseFloat(document.getElementById('AZN').value)
    var month = Number(document.getElementById('month').value)
    var percent = parseFloat(document.getElementById('percentage').value)
    var percentAdd = (amount * percent)/100 ;
    var total = amount + percentAdd;
    var monthly = Math.round(total/month)
    document.getElementById('monthly').innerHTML = `Mounthly Payment : ${monthly} AZN`
    document.getElementById('sum').innerHTML = `Loan Amount : ${total} AZN`
}


function calculateResults(){
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');
    const principle = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principle * x * calculatedInterest) / (x - 1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principle).toFixed(2);
        document.querySelector('#results').style.display = 'block';
        document.querySelector('#loading').style.display = 'none';
    } else {
        showError('Please check your inputs');
    }
}
