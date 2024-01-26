const AbstractManager = require("./AbstractManager");

class carManager extends AbstractManager {
  constructor() {
    super({ table: "car" });
  }

  async create(carType, userId) {
    const [result] = await this.database.query(
      `insert into ${this.table} (car_type_id, user_id) values (?,?)`,
      [carType, userId]
    );
    return result;
  }

  async delete(carId) {
    const [result] = await this.database.query(
      `delete from ${this.table} WHERE id = (?)`,
      [carId]
    );
    return result;
  }
}

module.exports = carManager;
