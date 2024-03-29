const calculator = require("./calculator")

test('Test add 10 + 5 is 15', () => { 
    //Arrange

    //Act
    const result = calculator.sum(10,5);

    //Assert
    expect(result).toEqual(15);
})

test('Test add 100 + 5 is 105', () => { 
    //Arrange
    
    //Act
    const result = calculator.sum(100,5);

    //Assert
    expect(result).toEqual(105);
})

test('Test add string(asd) + integer(5) is fail test', () => { 
    //Arrange

    //Act
    const result = calculator.sum("asd",5);    
    
    //Assert
    expect(result).toEqual("asd5");
})

test("The quotient is 5 when 10 is divided by 2", () => {
    //Arrange

    //Act
    const result = calculator.divide(10,2);

    //Assert
    expect(result).toEqual(5);
})

test("The quotient is 3.33 when 10 is divided by 3", () => {
    //Arrange

    //Act
    const result = calculator.divide(10,3);

    //Assert
    expect(result).toBeCloseTo(3.33333333, 5);
})

test("Divide positive number with negative number should be lesser than 0", () => {
    //Arrange

    //Act
    const result = calculator.divide(10,-3);

    //Assert
    expect(result).toBeLessThan(0);
})

test("Divide negtive number with negative number should be greater than 0", () => {
    //Arrange

    //Act
    const result = calculator.divide(-10,-3);

    //Assert
    expect(result).toBeGreaterThan(0);
})

//******SUBTRACT******
//a and b positive
test('Test subtract 10 - 5 is 5', () => { 
    //Arrange

    //Act
    const result = calculator.subtract(10,5);
    
    //Assert
    expect(result).toEqual(5);
})

//a and b negative
test('Test subtract -10 - (-5) is -5', () => { 
    //Arrange

    //Act
    const result = calculator.subtract(-10,-5);

    //Assert
    expect(result).toEqual(-5);
})

//a-positive b-negative
test('Test subtract 10 - (-5) is 15', () => { 
    //Arrange

    //Act
    const result = calculator.subtract(10,-5);
    
    //Assert
    expect(result).toEqual(15);
})

//a-zero b-negative
test('Test subtract 0 - (-5) is 5', () => { 
    //Arrange

    //Act
    const result = calculator.subtract(0,-5);

    //Assert
    expect(result).toEqual(5);
})

//*****MULTIPLY***** 
//a and b positive
test('Test multiply 10 * 5 is 50', () => { 
    //Arrange

    //Act
    const result = calculator.multiply(10,5);

    //Assert
    expect(result).toEqual(50);
})

//a-positive b-negative
test('Test multiply 10 * (-5) is -50', () => { 
    //Arrange

    //Act
    const result = calculator.multiply(10,-5);
    
    //Assert
    expect(result).toEqual(-50);
})

//a and b negative
test('Test multiply -10 * (-5) is 50', () => { 
    //Arrange

    //Act
    const result = calculator.multiply(-10,-5);

    //Assert
    expect(result).toEqual(50);
})

//a-zero b-positive
test('Test multiply 0 * (5) is 0', () => { 
    //Arrange

    //Act
    const result = calculator.multiply(0,5);

    //Assert
    expect(result).toEqual(0);
})