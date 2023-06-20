const { postActivities } = require("../Controller/ControllersPost");

const activitiesPost = async (req, res) => {
  const { name, difficulty, season, duration, countries} = req.body;
  try {
    if (![name, difficulty, season].every(Boolean))
      throw Error("Faltan Datos Importantes");
    let activities = await postActivities(name, difficulty, season, duration, countries);
    res.status(200).json(activities)
  } catch (error) {
    res.status(400).json({error: error.message})
  } 
};

module.exports = {
    activitiesPost
}
