// Engineer unit test
// TODO Enhance the tests to accommodate when a value is not provided

const Engineer = require("../lib/Engineer");

testEngineer = new Engineer("Jim Rich", 123, "jim@me.com", "jimRich");

describe("Engineer", () => {
    describe("Creates an employee object", () => {
        it("with a name, ID, and email", () => {
            expect(testEngineer.name).toBe("Jim Rich");
            expect(testEngineer.id).toBe(123);
            expect(testEngineer.email).toBe("jim@me.com");
        });

        it("returns name when invoked", () => {
            expect(testEngineer.getName()).toBe("Jim Rich");
        });

        it("returns email when invoked", () => {
            expect(testEngineer.getEmail()).toBe("jim@me.com");
        });

        it("returns role when invoked", () => {
            expect(testEngineer.getRole()).toBe("Engineer");
        });

        it("returns GitHub ID when invoked", () => {
            expect(testEngineer.getGitHubUser()).toBe("jimRich");
        });
    });
});
