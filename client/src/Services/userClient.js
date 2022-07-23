class UserClient {
  constructor() {
    this.url = "http://localhost:3042/users";
  }

  async login(userName, password) {
    console.log(userName, password);
    const response = await fetch(`${this.url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, password }),
    });
    if (response.status === 200) {
      const res = await response.json();
      return res.userName;
    } else if (response.status === 401) {
      return "Invalid password";
    } else if (response.status === 404) {
      return "User not found";
    }
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
