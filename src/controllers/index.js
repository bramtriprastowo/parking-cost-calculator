const { selectAll, insert } = require("../models/index");
const commonHelper = require("../helper/common");
const calculatePrice = require("../helper/price");

const controllers = {
  //Melakukan get data
  selectAllData: async (req, res) => {
    try {
      //Memasukkan query ke variabel dan memberi default value
      const idVehicle = req.query.idVehicle || 0;
      const startEntryTime = req.query.startEntryTime || "";
      const endEntryTime = req.query.endEntryTime || "";
      const startPrice = req.query.startPrice || 0;
      const endPrice = req.query.endPrice || 0;

      //Melakukan validasi untuk variabel idVehicle dan price berupa angka atau bukan
      if (isNaN(idVehicle) || isNaN(startPrice) || isNaN(endPrice))
        return commonHelper.response(
          res,
          null,
          400,
          "Failed to insert data! Invalid query params!"
        );

      //Menjalankan fungsi select all
      const result = await selectAll(
        idVehicle,
        startEntryTime,
        endEntryTime,
        startPrice,
        endPrice
      );

      //Menampilkan hasil atau error jika ada
      if (result.rows.length === 0) {
        return commonHelper.response(res, result.rows, 404, "Data not found!");
      }

      return commonHelper.response(res, result.rows, 200, "Get data success!");
    } catch (error) {
      console.log(error);
      return commonHelper.response(res, error, 500, "Internal server error!");
    }
  },

  //Melakukan post data
  insertData: async (req, res) => {
    try {
      //Memasukkan query ke variabel dan memberi default value
      const idVehicle = req.body.idVehicle || 0;
      const entryTime = req.body.entryTime || "";
      const exitTime = req.body.exitTime || "";
      const inputError = [];
      let time = 0;

      //Melakukan validasi input
      if (!idVehicle) inputError.push("idVehicle must be filled!");
      if (!entryTime) inputError.push("entryTime must be filled!");
      if (!exitTime) inputError.push("exitTime must be filled!");

      if (idVehicle < 1 || idVehicle > 2 || isNaN(idVehicle))
        return commonHelper.response(
          res,
          inputError,
          400,
          "Failed to insert data! Invalid idVehicle!"
        );

      if (inputError.length > 0)
        return commonHelper.response(
          res,
          inputError,
          400,
          "Failed to insert data! Check your input!"
        );

      //Melakukan pembulatan ke bawah untuk milidetik pada input dan melakukan validasi timestamp
      time = (new Date(exitTime) - new Date(entryTime)) / 1000;
      let roundedTime = Math.floor(time);

      if (time < 0)
        return commonHelper.response(
          res,
          inputError,
          400,
          "Invalid time input!"
        );

      //Menjalankan fungsi untuk menghitung harga, kemudian melakukan insert data
      const price = calculatePrice(idVehicle, roundedTime);
      const result = await insert(idVehicle, entryTime, exitTime, price);

      //Menampilkan hasil atau error jika ada
      return commonHelper.response(
        res,
        { rowCount: result.rowCount, idVehicle, entryTime, exitTime, price },
        201,
        "Data created successfully!"
      );
    } catch (error) {
      console.log(error);
      return commonHelper.response(
        res,
        error.rows,
        500,
        "Internal server error!"
      );
    }
  },
};

module.exports = controllers;
