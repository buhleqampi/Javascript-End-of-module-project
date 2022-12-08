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

function showProducts() {
    document.querySelector("#products").innerHTML = " ";
    products.forEach((product) => {
        document.querySelector("#products").innerHTML += `
        <div class="card" style="width: fit-content">
        <img src="${product.image}" style="width: 300px"/>
        <h5>${product.product}</h5>
        <div>${product.brand}</div>
        <div>${product.price}</div>
        <a href="admin.html" class="btn btn-primary mb-2 mt-3 w-75 d-flex justify-content-center">Go to admin</a>
        </div>
        `
    });
}
showProducts();

