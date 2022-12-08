let checkout = [];
// buttons
let submit = document.querySelector('#submit');
// event listener
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    let firstName = document.querySelector('#firstname').value;
    let lastName = document.querySelector('#lastname').value;
    let address1 = document.querySelector('#address1').value;
    let address2 = document.querySelector('#address2').value;
    let postalCode = document.querySelector('#postal').value;
    let city = document.querySelector('#city').value;
    let country = document.querySelector('#country').value;
    let email = document.querySelector('#email').value;
    let phoneNumber = document.querySelector('#phonenumber').value;
    let id = document.querySelector('#ID').value;
    let card = document.querySelector('#pay').value;
    let nameCard = document.querySelector('#namecard').value;
    let cardNumber = document.querySelector('#cardnumber').value;
    let year = document.querySelector('#mmyy').value;
    let code = document.querySelector('#cvv').value;
checkout.push({
    firstName,
    lastName,
    address1,
    address2,
    postalCode,
    city,
    country
})
localStorage.setItem('data', JSON.stringify(checkout));
});