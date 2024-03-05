const minmax = require("./minmax");

test('min returns the smaller value', () => {
    //Arrange
    
    //Act
    const result = minmax.min(5,6);
    expect(result).toEqual(5);
})

test('max returns the larger value', () => {
    //Arrange
    
    //Act
    const result = minmax.max(5,6);
    
    //Assert
    (result).toEqual(6);
})


test('when both the values are equal', () => {
    //Arrange
    
    //Act
    const result = minmax.min(5,5);
    
    //Assert
    (result).toEqual(5);
})

test('when both the values are equal', () => {
    //Arrange
    
    //Act
    const result = minmax.max(5,5);
    
    //Assert
    (result).toEqual(5);
})

test('when one of the input value is negative', () => {
    //Arrange
    
    //Act
    const result = minmax.max(5,-5);
    
    //Assert
    (result).toEqual(5);
})

test('when one of the input value is negative and the other zero', () => {
    //Arrange
    
    //Act
    const result = minmax.max(-5,0);
    
    //Assert
    (result).toEqual(0);
})