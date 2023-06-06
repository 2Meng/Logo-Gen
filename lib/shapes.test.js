const { describe } = require("node:test")
const { Triangle, Square, Circle } = require("../lib/shapes.js")

describe("Blue Triangle Test", () => {
    it("Test for a Triangle with a Blue Fill", () => {
        const shape = new Triangle()
        shape.setColor("blue")
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>')
    })})

describe("Hexcode Triangle Test", () => {
    it("Test for a triangle with Black fill using Hexcode", () => {
        const shape = new Triangle()
        shape.setColor("#000000")
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="#000000"/>')
    })})


describe("Square Test", () => {
    it("test for a yellow square", () => {
        const shape = new Square()
        shape.setColor("Yellow")
        expect(shape.render()).toEqual('<rect x="75" y="40" width="150" height="150" fill="Yellow"/>')
    })})