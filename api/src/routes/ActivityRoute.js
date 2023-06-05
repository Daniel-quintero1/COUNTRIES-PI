const { Router } = require("express");
const { activitiesPost } = require("../Handlers/HandlersPost");
const { activities } = require("../Handlers/HandlersGet");

const activity = Router();

activity.get("/", activities);
activity.post("/", activitiesPost);


module.exports = activity;