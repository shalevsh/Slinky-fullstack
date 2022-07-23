import axios from "axios";

class UserClient {
  constructor() {
    this.url = "http://localhost:30042/users";
  }

  async login(userName, password) {
    const response = await axios.post(`${this.url}/login`, {
      userName,
      password,
    });
    return response.data;
  }

  async register(userName, password, firstName, lastName, email, company) {
    const response = await axios.post(`${this.url}/register`, {
      userName,
      password,
      firstName,
      lastName,
      email,
      company,
    });
    return response.data;
  }
}
