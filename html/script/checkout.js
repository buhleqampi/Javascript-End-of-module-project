let checkout = [];
// buttons
let submit = document.querySelector('#submit');
// event listener
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    let product = document.querySelector('#firstname').value;
    let price = document.querySelector('#lastname').value;
    let quantity = document.querySelector('#address1').value;
    let totalPrice = document.querySelector('#address2').value;
checkout.push({
    product,
    price,
    quantity,
    totalPrice
})
localStorage.setItem('data', JSON.stringify(checkout))
});

// sorting



// filtering