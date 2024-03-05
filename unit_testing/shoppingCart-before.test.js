const shoppingCart  = require("./shoppingCart");

beforeEach(() => {
    shoppingCart.cart.length = 0;
})

test("after inserting an element into an existing array", () =>{
    //Act
    shoppingCart.addCartItem("lemon",3);

    //Assert
    expect(shoppingCart.cart.length).toBe(1);
})

test("after inserting an element into an existing array", () =>{
    //Act
    shoppingCart.addCartItem("apple",4);

    //Assert
    expect(shoppingCart.cart.length).toBe(1);
})