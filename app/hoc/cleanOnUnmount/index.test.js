const rewire = require("rewire")
const index = rewire("./index")
const mapStateToProps = index.__get__("mapStateToProps")
// @ponicode
describe("mapStateToProps", () => {
    test("0", () => {
        let callFunction = () => {
            mapStateToProps("Île-de-France")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mapStateToProps("Alabama")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mapStateToProps("Abruzzo")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mapStateToProps("Florida")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mapStateToProps(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.default", () => {
    test("0", () => {
        let param2 = [{ type: "ADD_TODO" }, { type: "RECEIVE_MESSAGE" }, "install", "remove", "discard", "discard", "assign", "REMOVE", "SHUTDOWN", "DELETE"]
        let callFunction = () => {
            index.default("da7588892", param2, {})
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param2 = [{ type: "ADD_TODO" }, { type: "RECEIVE_MESSAGE" }, "install", "remove", "discard", "discard", "assign", "REMOVE", "SHUTDOWN", "DELETE"]
        let callFunction = () => {
            index.default(12345, param2, {})
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.default("bc23a9d531064583ace8f67dad60f6bb", "DELETE", {})
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.default("da7588892", { type: "ADD_TODO" }, {})
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.default(12345, "REMOVE", "Abruzzo")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.default(undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
