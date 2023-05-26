const { pool } = require('../db');
// to get query info use 'EXPLAIN ANALYZE VERBOSE SELECT * FROM questions WHERE product_id = $1'

module.exports = {
  get(productId) {
    return pool.query('SELECT * FROM questions WHERE product_id = $1', [productId]);
  },

  post(productId, body, dateWritten, askerName, askerEmail) {
    return pool.query('INSERT INTO questions(product_id, body, date_written, asker_name, asker_email) values($1, $2, $3, $4, $5)', [productId, body, dateWritten, askerName, askerEmail]);
  },

  report(questionId) {
    return pool.query('UPDATE questions SET reported = true WHERE question_id = $1', [questionId]);
  },

  markHelpful(questionId) {
    return pool.query('UPDATE questions SET helpful = helpful + 1 WHERE question_id = $1', [questionId]);
  },
};
