// let checkout = [];

// function addToCheckout(list) {
//     document.querySelector("#checkoutInput").innerHTML = " ";
//     checkout.forEach((list) => {
//         document.querySelector("#checkoutInput").innerHTML += `
//         <tr>
//         <td>${list.product}</td>
//         <td>${list.quantity}</td>
//         <td>${list.price}</td>
//         </tr>
//         `
//     });
//     addToCheckout(list)
// }

// checkout.addEventListener('click',(e)=>{
//     e.preventDefault();
// let product = document.querySelector('#productInput').value;
// let quantity = document.querySelector('#quantityInput').value;
// let price = document.querySelector('#priceInput').value;
// let totalPrice = document.querySelector('#total').value;
// checkout.push({
//     product,
//     price,
//     quantity,
// totalPrice
// })
// localStorage.setItem('checkout', JSON.stringify(checkout));
// });
// function goCheckout(item) {
//     checkout.push(products[item]);
//     localStorage.setItem('checkout', JSON.stringify(checkout));
// }
let checkout = JSON.parse(localStorage.getItem('checkout'));
function displayCheckout(){
    document.querySelector("#checkoutInput").innerHTML = " ";
    checkout.forEach((list) => {
        document.querySelector("#checkoutInput").innerHTML += `
        <tr>
        <td>${list.product}</td>
        <td>${list.quantity}</td>
        <td>${list.price}</td>
        </tr>
        `
    });
}
displayCheckout()