const AbstractManager = require("./AbstractManager");

class chargePointManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "charge_point" });
  }

  // The C of CRUD - Create operation

  async create(item) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title) values (?)`,
      [item.title]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database
      .query(`SELECT operator_name, max_power, accessibility, station_id, station_name, adress, y_latitude, x_longitude, pt.name AS plug_type, charge_point_id_fr 
      FROM ${this.table} as c
      INNER JOIN station as s ON c.station_id = s.station_id_fr
      INNER JOIN list_plug_type as lpt ON  lpt.charge_point_id=c.charge_point_id_fr
      INNER JOIN plug_type as pt ON pt.id=lpt.plug_type_id`);

    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  // async update(item) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = chargePointManager;
