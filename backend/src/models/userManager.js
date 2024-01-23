const AbstractManager = require("./AbstractManager");

class userManager extends AbstractManager {
  constructor() {
    super({ table: "person" });
  }

  async create(person) {
    const [rows] = await this.database.query(
      `INSERT INTO 
      ${this.table} (lastName, firstName, email, gender, birthdate, city, zipcode, password)
     VALUES (?,?,?,?,?,?,?,?);`,
      [
        person.lastName,
        person.firstName,
        person.email,
        person.gender,
        person.birthdate,
        person.city,
        person.zipcode,
        person.hashedPassword,
      ]
    );

    return rows;
  }
}

module.exports = userManager;
