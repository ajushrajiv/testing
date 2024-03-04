const minmax = require("./minmax");

test('min returns the smaller value', () => { 
    const result = minmax.min(5,6);
    expect(result).toEqual(5);
})

test('max returns the larger value', () => { 
    const result = minmax.max(5,6);
    expect(result).toEqual(6);
})


test('when both the values are equal', () => { 
    const result = minmax.min(5,5);
    expect(result).toEqual(5);
})

test('when both the values are equal', () => { 
    const result = minmax.max(5,5);
    expect(result).toEqual(5);
})

test('when one of the input value is negative', () => { 
    const result = minmax.max(5,-5);
    expect(result).toEqual(5);
})

test('when one of the input value is negative and the other zero', () => { 
    const result = minmax.max(-5,0);
    expect(result).toEqual(0);
})