import {GitHub} from "./api";

describe("GitHub", () => {
    const gitHub = new GitHub("https://api.github.com/");
        
    test("getting Profile by username", async (done) => {
        const response = await gitHub.getProfile("arthurchumak");

        expect(response.status).toBe(200);

        done();
    });
});
