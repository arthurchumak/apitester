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
