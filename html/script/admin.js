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

function showAdmin() {
    let trow = document.querySelector("tbody");
    trow.innerHTML = "";
    products.forEach((list) => {
        trow.innerHTML += `
        <tr class= "data">
        <td>${list.id}</td>
        <td>${list.product}</td>
        <td>${list.brand}</td>
        <td>${list.price}</td>
        <td><button type="button" class="btn btn-dark btn-sm float-center edit">
        Edit
        </button>
        <td><button class ="btn btn-dark btn-sm float-center delete" id="deleteInput">Delete</button></td>
        </tr>
        `;
    });
}
showAdmin();


let submit = document.getElementById('submit');
function addItem(){
    submit.addEventListener('click',(e)=> {
        e.preventDefault();
        let id = document.querySelector('#idInput').value;
        let product = document.querySelector('#productInput').value;
        let brand = document.querySelector('#brandInput').value;
        let price = document.querySelector('#priceInput').value;
    products.push ({
        id,
        product,
        brand,
        price
    })


    localStorage.setItem('products', JSON.stringify(products))

    showAdmin()
    })
}

let edit = document.querySelector('#editInput');
function editItem(){
    edit.addEventListener('click', (e) =>{
        e.preventDefault();
        let id = document.querySelector('#idInput').value;
        let product = document.querySelector('#productInput').value;
        let brand = document.querySelector('#brandInput').value;
        let price = document.querySelector('#priceInput').value;
        products.push ({
            id,
            product,
            brand,
            price
        })
        localStorage.setItem('products', JSON.stringify(products))
        showAdmin() 
    })
} 

let deleteButton = document.getElementById('deleteInput');
function deleteItem(e){ 
    let id = document.querySelector('#idInput').value;
    let product = document.querySelector('#productInput').value;
    let brand = document.querySelector('#brandInput').value;
    let price = document.querySelector('#priceInput').value;
    let p = e.parentNode.parentNode.rowIndex;
    document.querySelector("table").deleteRow(p);
    products.pop ({
        id,
        product,
        brand,
        price,
        p
    })
}

// let tableProduct = document.getElementById('table');
// let sort = document.getElementById('sort');

// tableProduct.addEventListener('click',removeProduct);
// sort.addEventListener('scroll',sortProduct);



// function removeProduct(e){
//     if(e.target.classList.contains('delete')){
//         if(confirm('Are you sure you want to delete?')){
//             let tr = e.target.parentElement;
//             tableProduct.removeChild(tr);
//     }
//     }}

// let filter = document.getElementById('filter');
// filter.addEventListener('keyup',filterProduct);

// function filterProduct(e){
//     let text = e.target.toUpperCase();
//     let products =tableProduct.getElementsByTagName('tr');
//     Array.from(products).forEach(function(product){

//     })

// }
// function sortProduct (e){
//     e.preventDefault
//     let text = 
// }