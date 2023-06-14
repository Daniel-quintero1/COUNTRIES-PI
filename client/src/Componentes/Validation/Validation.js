const Validation = ({ name, difficulty, season, duration, countries }) => {
  const errors = {};

  if (name.length < 1) errors.name = "Name of Activities is Incorrect";
  if (difficulty < 0 || difficulty > 5)
    errors.difficulty =
      "Add the healthy score that you consider. It must be between 0 and 5";
  if (season.length < 1) errors.season = "Name of Season";
  if (duration.length < 1) errors.duration = "Time of Duration";
  if (countries.length < 1) errors.countries = "Name of Coutries";
  return errors;
};
export default Validation;
