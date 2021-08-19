
function updateProductNumber(product, price, simbol) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (simbol == 'plus') {
        productNumber = parseInt(productNumber) + 1;
    }
    if (simbol == 'minus' && productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    const productPrice = document.getElementById(product + '-price');
    productPrice.innerText = productNumber * price;
    getTotalPrice();
}

function getProductPrice() {
    const phoneOrder = document.getElementById('phone-price');
    const phonePrice = parseInt(phoneOrder.innerText);
    const caseOrder = document.getElementById('case-price');
    const casePrice = parseInt(caseOrder.innerText);
    const totalPrice = phonePrice + casePrice;
    return totalPrice;
}

function getTotalPrice() {
    const totalInput = getProductPrice();
    const subTotal = parseFloat(totalInput);
    const tax = subTotal / 20;
    const totalAmount = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-amount').innerText = totalAmount;
}


document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, 'plus');
});

document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, 'minus');
});

document.getElementById('case-plus').addEventListener('click', function () {
    /* 
        const caseInput = document.getElementById('case-pices');
        const caseInputText = parseInt(caseInput.value);
        caseInput.value = caseInputText + 1;
     */
    updateProductNumber('case', 59, 'plus')
});

document.getElementById('case-minus').addEventListener('click', function () {
    /* 
       const caseInput = document.getElementById('case-pices');
       const caseInputText = parseInt(caseInput.value);
       if (caseInputText > 0) {
           caseInput.value = caseInputText - 1;
       }
     */
    updateProductNumber('case', 59, 'minus')
});
