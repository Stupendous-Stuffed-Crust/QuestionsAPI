const { get, post } = require('../models/questions');

module.exports = {
  getQuestions(req, res) {
    // invoke model method with data included with req
    const productId = req.body.product_id;
    get(productId)
      .then((data) => {
        res.status(200).send(data.data); // likely need to restructure data for client
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send(err);
      });
  },

  postQuestion(req, res) {
    const productId = req.body.product_id;
    const { body } = req.body;
    const dateWritten = req.body.date_written;
    const askerName = req.body.asker_name;
    const askerEmail = req.body.asker_email;

    post(productId, body, dateWritten, askerName, askerEmail)
      .then((data) => {
        res.status(201).send(data.data);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send(err);
      });
  },

  // reportQuestion(req, res) {
  // },

  // markHelpfulQuestion(req, res) {

  // },

};
