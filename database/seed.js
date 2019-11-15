const db = require("./index.js");

const things = [
  {
    name: "Deff",
    task: "Do something"
  },
  {
    name: "what",
    task: "Believe it"
  },
  {
    name: "Quick",
    task: "slow down"
  },
  {
    name: "Funny",
    task: "haha"
  },
  {
    name: "naruto",
    task: "run"
  }
];

things.forEach(({ name, task }) => {
  // insert name and task into notebook
  db.query(
    `INSERT INTO notebook (person_name, task) Values ("${name}", "${task}");`
  );
});
