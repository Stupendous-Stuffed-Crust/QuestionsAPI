const {
  get, post, report, markHelpful,
} = require('../models/questions');

module.exports = {
  getQuestions(req, res) {
    const productId = req.query.product_id;

    return get(productId)
      .then((data) => {
        res.send(data.rows); // likely need to restructure data for client
      })
      .catch((err) => {
        console.error(err.stack);
        res.sendStatus(500);
      });
  },

  postQuestion(req, res) {
    const productId = req.query.product_id;
    const { body } = req.query;
    const dateWritten = Date.now();
    const askerName = req.query.name;
    const askerEmail = req.query.email;

    return post(productId, body, dateWritten, askerName, askerEmail)
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send(err);
      });
  },

  reportQuestion(req, res) {
    const questionId = req.params.question_id;
    return report(questionId)
      .then(() => res.sendStatus(204))
      .catch((err) => {
        console.error(err.stack);
        res.sendStatus(500);
      });
  },

  markHelpfulQuestion(req, res) {
    const questionId = req.params.question_id;
    return markHelpful(questionId)
      .then(() => res.sendStatus(204))
      .catch((err) => {
        console.error(err.stack);
        res.sendStatus(500);
      });
  },

};
