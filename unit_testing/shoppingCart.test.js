const shoppingCart  = require("./shoppingCart");

test('the total value in the shopping cart should be 0 when the array is empty', () => { 
    expect(shoppingCart.cart.length).toBe(0);
})

test('adds a item with name and value', () => { 
    const result = shoppingCart.addCartItem("salad",2);
    expect(shoppingCart.cart.length).toBe(1);
})

test('adds another item with name and value', () => { 
    const result = shoppingCart.addCartItem("egg",4);
    expect(shoppingCart.cart.length).toBe(2);
})

test('the total value in the shopping cart', () => { 
    expect(shoppingCart.getTotalValue()).toBe(6);
})

