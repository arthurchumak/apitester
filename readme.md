# ApiTester

# Creating Tests

## Describe your api by client

```
import axios from "axios";

axios.defaults.validateStatus = () => true;

export class GitHub {
    constructor(private baseURL: string) {}

    public async getProfile(username: string) {
        return axios({
            baseURL: this.baseURL,
            url: "/users/" + username,
            method: "get"
        });
    }
}
```

## Write tests for api client

```
describe("GitHub", () => {
    const gitHub = new GitHub("https://api.github.com/");
        
    test("getting Profile by username", async (done) => {
        const response = await gitHub.getProfile("arthurchumak");

        expect(response.status).toBe(200);

        done();
    });
});

```