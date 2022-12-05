const axios = require("axios");

const controllers = {
  home: async (req, res) => {
    res.render("home.ejs", {
      layout: "../views/layouts/main",
      title: "Sistem Parkir - Home"
    });
  },

  add: async (req, res) => {
    res.render("add.ejs", {
      layout: "../views/layouts/main",
      title: "Sistem Parkir - Add",
      link: process.env.BASE_URL
    });
  },
};

module.exports = controllers;
