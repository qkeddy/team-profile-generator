// Manager unit test
// TODO Enhance the tests to accommodate when a value is not provided

const Manager = require("../lib/Manager");

testManager = new Manager("Jim Rich", 123, "jim@me.com", "212-555-5555");

describe("Manager", () => {
    describe("Creates an employee object", () => {
        it("with a name, ID, and email", () => {
            expect(testManager.name).toBe("Jim Rich");
            expect(testManager.id).toBe(123);
            expect(testManager.email).toBe("jim@me.com");
        });

        it("returns name when invoked", () => {
            expect(testManager.getName()).toBe("Jim Rich");
        });

        it("returns email when invoked", () => {
            expect(testManager.getEmail()).toBe("jim@me.com");
        });

        it("returns role when invoked", () => {
            expect(testManager.getRole()).toBe("Manager");
        });

        it("returns a phone number when invoked", () => {
            expect(testManager.getOfficeNumber()).toBe("212-555-5555");
        });
    });
});
