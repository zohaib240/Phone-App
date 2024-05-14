const phones = [
    {
        brand: 'Samsung',
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000,
        image :"asset/download (15).jpeg"
    },
    {
        brand: 'Xiomi',
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 15000,
        image : "asset/download (1).jpeg"
    },
    {
        brand: 'Infinix',
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 15000,
        image :"asset/download (2).jpeg"

    },
    {
        brand: 'Tecno',
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 15000,
        image :"asset/download (3).jpeg"
    },
    {
        brand: 'Iphone',
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 15000,
        image :"asset/download (4).jpeg"
    },
    {
        brand: 'Oppo',
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000,
        image :"asset/download (5).jpeg"
    },
    {
        brand: 'Vivo',
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 15000,
        image :"asset/download (6).jpeg"

    },
    {
        brand: 'Samsung',
        model: 's50',
        ram: 50,
        rom: 1024,
        camera: '60 megapixel',
        price: 300000,
        image :"asset/download (7).jpeg"
        

    },
    {
        brand: 'Samsung',
        model: 's57',
        ram: 50,
        rom: 1024,
        camera: '60 megapixel',
        price: 300000,
        image :"asset/download (9).jpeg"
        

    },
    {
        brand: 'Samsung',
        model: 's55',
        ram: 70,
        rom: 1050,
        camera: '60 megapixel',
        price: 200000,
        image :"asset/download (10).jpeg"
        

    },
    {
        brand: 'Samsung',
        model: 's40',
        ram: 50,
        rom: 120,
        camera: '60 megapixel',
        price: 100000,
        image :"asset/download (11).jpeg"
        

    },
    {
        brand: 'Samsung',
        model: 's41',
        ram: 500,
        rom: 85,
        camera: '60 megapixel',
        price: 300000,
        image :"asset/download (12).jpeg"
        

    },
    {
        brand: 'Samsung',
        model: 's5',
        ram: 16,
        rom: 20,
        camera: '60 megapixel',
        price: 20000,
        image :"asset/download (13).jpeg"
        

    },
    {
        brand: 'Samsung',
        model: 's40',
        ram: 50,
        rom: 100,
        camera: '60 megapixel',
        price: 50000,
        image :"asset/download (8).jpeg"
        

    },
    {
        brand: 'Samsung',
        model: 's51',
        ram: 50,
        rom: 1024,
        camera: '60 megapixel',
        price: 300000,
        image :"asset/download (15).jpeg"
        

    },
    {
        brand: 'Samsung',
        model: 's65',
        ram: 50,
        rom: 1024,
        camera: '60 megapixel',
        price: 400000,
        image :"asset/download (16).jpeg"
        

    },
    {
        brand: 'Samsung',
        model: 's22',
        ram: 50,
        rom: 1024,
        camera: '60 megapixel',
        price: 300000,
        image :"asset/download (17).jpeg"
        

    },
    {
        brand: 'I-phone',
        model: '13 pro',
        ram: 64,
        rom: 10,
        camera: '60 megapixel',
        price: 200000,
        image :"asset/download (18).jpeg"
        

    },
    {
        brand: 'I-phone ',
        model: '11 pro',
        ram: 50,
        rom: 104,
        camera: '50 megapixel',
        price: 300000,
        image :"asset/download (19).jpeg"
        

    },
    {
        brand: 'Google Pixel 7',
        model: 's50',
        ram: 50,
        rom: 1024,
        camera: '60 megapixel',
        price: 49000,
        image :"asset/download (20).jpeg"
        

    },
]

let arr;
let items = JSON.parse(localStorage.getItem('cartItems'));
if(items === null){
    arr = [];
}else{
    arr = items;
}

const div = document.querySelector('.products');
function renderItems (){
    for(let i = 0; i < phones.length; i++){
        div.innerHTML += `
        <div class="card bg- text-dark border-dark" style="width: 18rem;">
            <div class="card-body">

  <img src='${phones[i].image }' class="card-img-top" alt="...">
              
                
                <h5 class="card-title">${phones[i].brand +' '+ phones[i].model}</h5>
                <h5 class="card-title">Camera  ${phones[i].camera}</h5>
                <h5 class="card-title">Ram  ${phones[i].ram}Gb</h5>
                <h5 class="card-title">Rom  ${phones[i].rom}Gb</h5>
                <p class="card-text">Rs ${phones[i].price}</p>
                <button onclick="addtocart(${i})" class="btn btn-primary">Add to Cart</button>
            </div>
        </div>
        `
    }
}

renderItems()

function addtocart(index){
    if(arr.includes(phones[index])){
        phones[index].quantity += 1;
    }else{
        phones[index].quantity = 1;
        arr.push(phones[index]);
    }
    console.log(arr);
}

function gotocart(){
    console.log('cart');
    localStorage.setItem('cartItems' , JSON.stringify(arr));
    window.location = 'cart.html';
}