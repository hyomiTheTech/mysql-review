const db = require("./index.js");

module.exports = {
  getAllTasks: callback => {
    db.query(`SELECT * FROM notebook;`, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },

  postOneTask: ({ person_name, task }, callback) => {
    db.query(
      `INSERT INTO notebook (person_name, task) Values ("${person_name}", "${task}");`,
      (err, result) => {
        if (err) {
          callback(err);
        } else {
          callback(null, result);
        }
      }
    );
  }
};
