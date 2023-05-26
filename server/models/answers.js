const { pool } = require('../db');

module.exports = {
  get(questionId) {
    return pool.query('EXPLAIN ANALYZE SELECT * FROM answers WHERE question_id = $1', [questionId]);
  },
  post(questionId, body, dateWritten, answererName, answererEmail) {
    return pool.query('INSERT INTO answers(question_id, body, date_written, answerer_name, answerer_email) values($1, $2, $3, $4, $5)', [questionId, body, dateWritten, answererName, answererEmail]);
  },
};
