// Intern unit test

const Intern = require("../lib/Intern");

testIntern = new Intern("Jim Rich", 123, "jim@me.com", "NYU");

describe("Intern", () => {
    describe("Creates an employee object", () => {
        it("with a name, ID, and email", () => {
            expect(testIntern.name).toBe("Jim Rich");
            expect(testIntern.id).toBe(123);
            expect(testIntern.email).toBe("jim@me.com");
        });

        it("returns name when invoked", () => {
            expect(testIntern.getName()).toBe("Jim Rich");
        });

        it("returns email when invoked", () => {
            expect(testIntern.getEmail()).toBe("jim@me.com");
        });

        it("returns role when invoked", () => {
            expect(testIntern.getRole()).toBe("Intern");
        });

        it("returns GitHub ID when invoked", () => {
            expect(testIntern.getSchool()).toBe("NYU");
        });
    });
});
