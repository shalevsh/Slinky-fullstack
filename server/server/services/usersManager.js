const { User, sequelize } = require("../storages/models");

class UserManager {
  constructor() {
    this.user = User;
  }

  async getUser(userName) {
    return await this.user.findOne({
      where: {
        userName,
      },
    });
  }

  async createUser(userName, password, firstName, lastName, email, company) {
    return await this.user.create({
      userName,
      password,
      firstName,
      lastName,
      email,
      company,
    });
  }

  async updateUser(userName, password, firstName, lastName, email, company) {
    return await this.user.update(
      {
        userName,
        password,
        firstName,
        lastName,
        email,
        company,
      },
      {
        where: {
          userName,
        },
      }
    );
  }

  async deleteUser(userName) {
    return await this.user.destroy({
      where: {
        userName,
      },
    });
  }

}

export default new UserManager();
