const { Activity, Country } = require("../db");

const postActivities = async (
  name,
  difficulty,
  season,
  duration,
  countries
) => {
  const [createActivities, created] = await Activity.findOrCreate({
    where: {
      name,
      difficulty,
      season,
      duration,
    },
  });
  if (countries && countries.length > 0) {
    let countrinFind = await Country.findAll({
      where: { id: countries },
    });
    await createActivities.setCountries(countrinFind);
  }
  return createActivities;
};
///FALTA ARREGLAR LA UNION DE LOS MODELOS
module.exports = {
  postActivities,
};
