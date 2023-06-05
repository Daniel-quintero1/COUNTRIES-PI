const { Router } = require("express");
const {  idCountries, nameByCountries } = require("../Handlers/HandlersGet");

const countries = Router();

countries.get("/", nameByCountries);
countries.get("/:id", idCountries);


module.exports = countries;
