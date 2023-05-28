const { pool } = require('../db');
// to get query info use 'EXPLAIN ANALYZE VERBOSE SELECT * FROM questions WHERE product_id = $1'

module.exports = {
  get(productId, page = 1, count = 5) {
    const offset = page > 1 ? (page * count) - count : 0;
    return pool.query('SELECT * FROM questions WHERE product_id = $1 LIMIT $2 OFFSET $3', [productId, count, offset]);
  },

  post(productId, body, dateWritten, askerName, askerEmail) {
    return pool.query('INSERT INTO questions(product_id, body, date_written, asker_name, asker_email) values($1, $2, $3, $4, $5)', [productId, body, dateWritten, askerName, askerEmail]);
  },

  report(questionId) {
    console.log('====', questionId);
    return pool.query('UPDATE questions SET reported = true WHERE id = $1', [questionId]);
  },

  markHelpful(questionId) {
    return pool.query('UPDATE questions SET helpful = helpful + 1 WHERE id = $1', [questionId]);
  },
};
