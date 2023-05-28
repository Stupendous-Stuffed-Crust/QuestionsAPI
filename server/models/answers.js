const { pool } = require('../db');

module.exports = {
  get(questionId, page = 1, count = 5) {
    const offset = page > 1 ? (page * count) - count : 0;
    return pool.query('SELECT * FROM answers WHERE question_id = $1 LIMIT $2 OFFSET $3', [questionId, count, offset]);
  },

  post(questionId, body, dateWritten, answererName, answererEmail) {
    return pool.query('INSERT INTO answers(question_id, body, date_written, answerer_name, answerer_email) values($1, $2, $3, $4, $5)', [questionId, body, dateWritten, answererName, answererEmail]);
  },

  report(answerId) {
    console.log('reportID:', answerId);
    return pool.query('UPDATE answers SET reported = true WHERE id = $1', [answerId]);
  },

  markHelpful(answerId) {
    console.log('helpID', answerId);
    return pool.query('UPDATE answers SET helpful = helpful + 1 WHERE id = $1', [answerId]);
  },
};
