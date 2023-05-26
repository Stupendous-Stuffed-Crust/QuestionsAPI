const { client } = require('../db');

module.exports = {
  get(questionId) {
    client.query('SELECT * FROM answers WHERE question_id = $1', [questionId])
      .then((data) => {
        console.log(data);
        // handle and return data;
        // or just return data and handle the data in the controller?
      })
      .catch((err) => {
        console.error(err);
      });
  },
  post(questionId, body, dateWritten, answererName, answererEmail) {
    client.query('INSERT INTO answers(question_id, body, date_written, answerer_name, answerer_email) values($1, $2, $3, $4, $5)', [questionId, body, dateWritten, answererName, answererEmail])
      .then((data) => {
        console.log(data);
        // handle and return data;
        // or return data and handle in controller.
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
