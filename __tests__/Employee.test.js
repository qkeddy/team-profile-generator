// Employee unit test

const Employee = require("../lib/Employee");

testEmployee = new Employee("Jim Rich", 123, "jim@me.com");

describe("Employee", () => {
    describe("Creates an employee object", () => {
        it("with a name, ID, and email", () => {
            expect(testEmployee.name).toBe("Jim Rich");
            expect(testEmployee.id).toBe(123);
            expect(testEmployee.email).toBe("jim@me.com");
        });

        it("returns name when invoked", () => {
            expect(testEmployee.getName()).toBe("Jim Rich");
        });

        it("returns email when invoked", () => {
            expect(testEmployee.getEmail()).toBe("jim@me.com");
        });

        it("returns role when invoked", () => {
            expect(testEmployee.getRole()).toBe("Employee");
        });
    });
});
