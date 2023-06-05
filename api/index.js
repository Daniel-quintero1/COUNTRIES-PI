const { getCountriesBdd } = require('./src/Controller/ControllersGet.js');
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  getCountriesBdd()
  server.listen(3001, () => {
    console.log('AQUI listening at 3001'); // eslint-disable-line no-console
  });
});
