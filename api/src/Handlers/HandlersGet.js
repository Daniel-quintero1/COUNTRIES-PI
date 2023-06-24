const {
  getCountriesAll,
  getCountriesId,
  getCountriesName,
  getActivities,
} = require("../Controller/ControllersGet");

const allCountries = async (req, res) => {
  try {
    let countriesAll = await getCountriesAll();
    res.status(200).json(countriesAll);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const idCountries = async (req, res) => {
  const { id } = req.params;
  try {
    let idCount = await getCountriesId(id);
    res.status(200).json(idCount);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const nameByCountries = async (req, res) => {
  const { name } = req.query;
  let allCount = await getCountriesName(name);
  console.log(allCount);
  console.log(name);
  try {
    if (!allCount.length) throw Error("Ese Nombre No Existe");
    res.status(200).json(allCount);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const activities = async (req, res) => {
  try {
    let allActivities = await getActivities();
    res.status(200).json(allActivities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  allCountries,
  idCountries,
  nameByCountries,
  activities
};
