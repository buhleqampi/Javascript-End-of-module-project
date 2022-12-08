let admin = [];
// buttons
let sort = document.querySelector('#sort');
let add= document.querySelector('#addition');

// event listener
// submit.addEventListener('click',(e)=>{
//     e.preventDefault();
//     let firstName = document.querySelector('#firstname').value;
//     let lastName = document.querySelector('#lastname').value;
//     let address1 = document.querySelector('#address1').value;
//     let address2 = document.querySelector('#address2').value;
//     let postalCode = document.querySelector('#postal').value;
//     let city = document.querySelector('#city').value;
//     let country = document.querySelector('#country').value;
//     let email = document.querySelector('#email').value;
//     let phoneNumber = document.querySelector('#phonenumber').value;
//     let id = document.querySelector('#ID').value;
//     let card = document.querySelector('#pay').value;
//     let nameCard = document.querySelector('#namecard').value;
//     let cardNumber = document.querySelector('#cardnumber').value;
//     let year = document.querySelector('#mmyy').value;
//     let code = document.querySelector('#cvv').value;
// admin.push({
//     firstName,
//     lastName,
//     address1,
//     address2,
//     postalCode,
//     city,
//     country
// })
// localStorage.setItem('data', JSON.stringify(admin));
// });
let products = JSON.parse(localStorage.getItem('products')) ?
JSON.parse(localStorage.getItem('products')) : localStorage.setItem('products', JSON.stringify(
        [
            {
                "id": 1,
                "product": "Foundations",
                "brand": "fentybeauty",
                "image": "https://i.postimg.cc/T3fvVqJ8/foundationsjpg-image-668x550.jpg",
                "price": "R600"
        
            },
            {
                "id":2,
                "product": "Concealers",
                "brand":"mac",
                "image":"https://i.postimg.cc/prJqR8h8/IMG-0181.webp",
                "price": "R400"
            },
            {
                "id": 3,
                "product":"Bronzers",
                "brand":"yardley",
                "image":"https://i.postimg.cc/k578PZNj/YAR-F122282-BLANK-1.jpg",
                "price": "R250"
            },
            {
                "id": 4,
                "product":"Highlighters",
                "brand":"rimmel",
                "image":"https://i.postimg.cc/tJnpcqYL/THREE.jpg",
                "price": "R180"
            },
            {
                "id":5,
                "product":"Eyeshadows",
                "brand":"esssence",
                "image":"https://i.postimg.cc/MG8GCQwq/8226-b567c3ee.jpg",
                "price": "R200"
            },
            {
                "id":6,
                "product":"Lipsticks",
                "brand":"maybelline",
                "image":"https://i.postimg.cc/4dsQxy6T/711k-UW-3m6-L-AC-SL1200.jpg",
                "price": "R250"
            },
            {
                "id": 7,
                "product":"Pencils",
                "brand":"rimmel",
                "image":"https://i.postimg.cc/wBvsfNQM/e90b0a0113eeb391a9cfac73bc3fffc9.jpg",
                "price": "R170"
            },
            {
                "id": 8,
                "product":"Lashes",
                "brand":"hudabeauty",
                "image":"https://i.postimg.cc/9Fw47VFR/lashes.jpg",
                "price": "R100"
            },
            {
                "id": 9,
                "product":"Tools",
                "brand":"sorbet",
                "image":"https://i.postimg.cc/5NXPQHCB/tools.jpg",
                "price": "R500"
            },
            {
                "id": 10,
                "product":"Removers",
                "brand":"Garnier",
                "image":"https://i.postimg.cc/L4nGK4Vb/remover.jpg",
                "price": "R280"
            }
    ]));

// function showAdmin() {
//     document.querySelector("#tbl").innerHTML = " ";
//     products.forEach((product) => {
//         document.querySelector("#tbl").innerHTML += `
//         <tr>
//         <th scope="row">1</th>
//         <td>${product.id}</td></tr>
//         <tr>
//         <th scope="row">2</th>
//         <td>${product.quantity}</td></tr>
//         <tr>
//         <th scope="row">3</th>
//         <td>${product.price}</td,button></tr>
//         <tr>
//         <th scope="row">4</th>
//         <td>${product.edit}</td></tr>
//         <th scope="row">5</th>
//         <td>${product.delete}</td></tr>
//         `
//     });
// }
// showAdmin();