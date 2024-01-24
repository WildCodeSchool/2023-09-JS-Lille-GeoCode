const AbstractManager = require("./AbstractManager");

class bookAvailable extends AbstractManager {
  constructor() {
    super({ table: "booking_list" });
  }

  async getAll() {
    const [rows] = await this.database
      .query(`SELECT date, charge_point_id, car_id
    FROM ${this.table} `);

    return rows;
  }
}

module.exports = bookAvailable;
