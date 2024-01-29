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

  async getAll() {
    const [rows] = await this.database
      .query(`SELECT date, charge_point_id, car_id
    FROM ${this.table} `);

    return rows;
  }

  async getBookingForUser(id) {
    const [rows] = await this.database.query(
      `SELECT ${this.table}.* FROM ${this.table} INNER JOIN car ON car.id = booking_list.car_id INNER JOIN user ON car.user_id = user.id WHERE user.id = ?;`,
      [id]
    );
    return rows;
  }

  async delete(bookId) {
    const [result] = await this.database.query(
      `delete from ${this.table} WHERE id = (?)`,
      [bookId]
    );
    return result;
  }
}

module.exports = BookManager;
