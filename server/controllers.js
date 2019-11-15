const dbHelpers = require("../database/dbHelpers.js");

module.exports = {
  getStuff: (req, res) => {
    dbHelpers.getAllTasks((err, results) => {
      if (err) {
        res.status.send("Error getting stuff from database", err);
      } else {
        res.status(200).send(results);
      }
    });
  },

  postStuff: ({ body }, res) => {
    dbHelpers.postOneTask(body, err => {
      if (err) {
        res.status(400).send("Error posting task in DB", err);
      } else {
        console.log(body);
        res.status(201).send(`Successfully added task ${body.task} to DB`);
      }
    });
  }
};
