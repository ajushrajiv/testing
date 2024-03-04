const cart = []

function addCartItem(name,value){
    cart.push({name, value})
}

function deleteCartItem(){
    
}

function getTotalValue(){
    let result = 0;
    for (let item of cart){
        result += item.value;
    }
    return result;
}

module.exports.addCartItem = addCartItem;
module.exports.getTotalValue = getTotalValue;
module.exports.cart = cart;