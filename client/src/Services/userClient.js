import axios from "axios";

class UserClient {
  constructor() {
    this.url = "http://localhost:3042/users";
  }

  async login(userName, password) {
    const response = await axios.post(`${this.url}/login`, {
      userName,
      password,
    });
    return response.data;
  }

  async register(user) {
    const response = await fetch(`${this.url}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: user.userName,
        password: user.password,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        company: user.company,
        isAdmin: user.isAdmin,
      }),
    });
    return response.json();
  }
}

export default new UserClient();
