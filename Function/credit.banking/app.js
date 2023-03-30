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