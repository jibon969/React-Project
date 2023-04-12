
const addTwoNumber = (a, b) =>{
    return a + b
}

// use local storage to manage data
const addToDb = (id) =>{
    let shoppingCart;
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }
    
    const quantity = shoppingCart[id]

    if(quantity){
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(id, newQuantity);
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

export {addTwoNumber, addToDb}