const { Router } = require('express');
const countries  = require('./CountriesRoute');
const  activity  = require('./ActivityRoute');


const router = Router();

router.use("/countries", countries)
router.use("/activity", activity)

module.exports = router;
