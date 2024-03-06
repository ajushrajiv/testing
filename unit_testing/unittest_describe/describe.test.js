const calculator = require("../calculator")

describe("mathematical function test", ()=>{
    describe("multiplication",() => {
        it('multiply two positive numbers', () => {
            expect(calculator.multiply(5,3)).toBe(15)
        })

        it('multiply two negative numbers', () => {
            expect(calculator.multiply(-5,-3)).toBe(15)
        })
    })

    describe("division",() => {
        it('divide two positive numbers', () => {
            expect(calculator.divide(15,3)).toBe(5)
        })

        it('divide two negative numbers', () => {
            expect(calculator.divide(-15,-3)).toBe(5)
        })

        it.todo('should throw error when string is entered as input')
    })
})