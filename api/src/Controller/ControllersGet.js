const axios = require("axios");
const { Country, Activity } = require("../db");

const URL = `https://rest-countries.up.railway.app/v2/all`;

const getCountriesApi = async () => {
  const url = await axios.get(URL);
  return url.data;
};
const getCountriesBdd = async () => {
  const createCount = await getCountriesApi();
  for (const count of createCount) {
    await Country.create({
      id: count.alpha3Code,
      name: count.name,
      flag: count.flags.png,
      continents: count.region,
      capital: count.capital,
      subregion: count.subregion,
      area: count.area,
      population: count.population,
    })
  
  }
};
const getCountriesAll = async () => {
  const countries = await Country.findAll({
    include: {
      model: Activity,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return countries;
};

const getCountriesId = async (id) => {
  const countriesId = await Country.findByPk(id, {
    include: {
      model: Activity,
      attributes: ['name', 'difficulty', 'season', 'duration'],
      through: {
        attributes: [],
      },
    },
  });
  return countriesId;
};
const getCountriesName = async (name) => {
  let countries = await getCountriesAll();
  if (!name) return countries;
  else
    return countries.filter((e) => {
      return e.name.toLowerCase().includes(name.toLowerCase());
    });
};
const getActivities = async () => {
  let newActivities = await Activity.findAll({
    include: {
      model: Country,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return newActivities;
};

module.exports = {
  getCountriesApi,
  getCountriesBdd,
  getCountriesAll,
  getCountriesId,
  getCountriesName,
  getActivities,
};
