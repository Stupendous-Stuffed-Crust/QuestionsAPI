const { client } = require('../db');

module.exports = {
  get(productId) {
    return client.query('SELECT * FROM questions WHERE product_id = $1', [productId]);
    // .then((data) => {
    //   console.log(data);
    //   // handle data and return or return data to controller for handling
    // })
    // .catch((err) => {
    //   console.error(err);
    //   // we can delete then and catch if we return data to controller for handling
    // });
  },

  post(productId, body, dateWritten, askerName, askerEmail) {
    client.query('INSERT INTO questions(product_id, body, date_written, asker_name, asker_email) values($1, $2, $3, $4, $5)', [productId, body, dateWritten, askerName, askerEmail])
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
