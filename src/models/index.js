const pool = require("../config/postgresql");

const selectAll = (
  idVehicle,
  startEntryTime,
  endEntryTime,
  startPrice,
  endPrice
) => {
    let condition = "";

    condition += idVehicle ? `AND parking.id_vehicle=${idVehicle} ` : "";
    condition += startEntryTime ? `AND parking.entry_time >= '${startEntryTime}' ` : "";
    condition += endEntryTime ? `AND parking.entry_time <= '${endEntryTime}' ` : "";
    condition += startPrice ? `AND price>=${startPrice} ` : "";
    condition += endPrice ? `AND price<=${endPrice}` : "";

  return new Promise((resolve, reject) =>
    pool.query(
      `SELECT parking.id, vehicle.vehicle_type, parking.entry_time, parking.exit_time, price 
      FROM parking 
      JOIN vehicle ON parking.id_vehicle=vehicle.id
      WHERE parking.id>0 ${condition}
      ORDER BY parking.id DESC`,
      (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    )
  );
};

const insert = (idVehicle, entryTime, exitTime, price) => {
  return new Promise((resolve, reject) =>
    pool.query(
      `INSERT INTO parking(id_vehicle, entry_time, exit_time, price)
      VALUES(${idVehicle}, '${entryTime}', '${exitTime}', ${price})`,
      (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    )
  );
};

// const insert = () => {
//     return new Promise((resolve, reject) =>
//       pool.query(`INSERT INTO parking(id_vehicle, entry_time, exit_time, price)
//       VALUES(2, '1999-01-08 04:05:06', '1999-01-08 04:05:45', 20000);`, (error, result) => {
//         if (!error) {
//           resolve(result);
//         } else {
//           reject(error);
//         }
//       })
//     );
// };

module.exports = { selectAll, insert };
