console.log('cart items');

const cartItems = JSON.parse(localStorage.getItem('cartItems'));
// console.log(cartItems)

const div = document.querySelector('div');

function renderItems (){
    if(cartItems != null && cartItems.length > 0){
        for(let i = 0; i < cartItems.length; i++){
            console.log(cartItems[i]);
            div.innerHTML += `
            <div class="card  card-back  text-dark text-center  text-light border-dark" style="width: 18rem;">
            <div class="card-body">
            
            <p>Model: ${cartItems[i].brand + ' ' + cartItems[i].model}</p>
            <p>Price: ${cartItems[i].price}</p>
            <p>Model: ${cartItems[i].model}</p>
            <p>Ram: ${cartItems[i].ram}</p>
            <p>Rom: ${cartItems[i].rom}</p>
    




            <button type="button" class="btn btn-danger" onclick=" deleteitems(${i}) ">Delete</button>
            </div>
            </div>
            `
        }
    }else{
        console.log('cart item empty ha maalik')
        div.innerHTML = `
        <h3 class="text-center">No Item Found...</h3>
        `
    }
}





function deleteitems(index) {
    div.innerHTML =''
    cartItems.splice (index ,1)
    localStorage.setItem('cartItems' ,JSON.stringify('cartItems'))

renderItems()



    
}


renderItems()



// localStorage.setItem('kis naam sa krwana ha' , 'value stringify wali');

// localStorage.getItem('kis item sa save krwaya ha');

// JSON.stringify()
// JSON.parse()