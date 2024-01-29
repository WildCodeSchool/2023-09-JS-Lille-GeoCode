const AbstractManager = require("./AbstractManager");

class BookManager extends AbstractManager {
  constructor() {
    super({ table: "booking_list" });
  }

  async create(date, chargePointId, carId) {
    const [result] = await this.database.query(
      `insert into ${this.table} (date, charge_point_id, car_id) values (?,?,?)`,
      [date, chargePointId, carId]
    );
    return result;
  }
}

module.exports = BookManager;
