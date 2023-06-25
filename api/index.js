const { getCountriesBdd } = require('./src/Controller/ControllersGet.js');
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const port = process.env.PORT  || 3001;

conn.sync({ force: false }).then(async () => {
  getCountriesBdd()
  server.listen(port, () => {
    console.log(`AQUI listening at ${port}`); 
  });
});
