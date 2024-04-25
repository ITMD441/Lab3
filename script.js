const billTotalInput = document.getElementById('billTotal');
const tipInput = document.getElementById('tip');
const tipPercentageSpan = document.getElementById('tipPercentage');
const tipAmountInput = document.getElementById('tipAmount');
const totalBillInput = document.getElementById('totalBill');

tipInput.oninput = function () {
    tipPercentageSpan.textContent = tipInput.value;
    calculateTip();
};

billTotalInput.oninput = function () {
    calculateTip();
};

function calculateTip() {
    const billTotal = parseFloat(billTotalInput.value);
    const tip = parseFloat(tipInput.value) / 100;
    const tipAmount = billTotal * tip;
    const totalBill = billTotal + tipAmount;

    tipAmountInput.value = tipAmount.toFixed(2);
    totalBillInput.value = totalBill.toFixed(2);
}
