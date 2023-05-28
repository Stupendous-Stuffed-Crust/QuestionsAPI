const {
  get, post, report, markHelpful,
} = require('../models/answers');

module.exports = {
  getAnswers(req, res) {
    // const { page, count } = req.query; these are sent with get request.
    // not sure how I will be using them yet.
    return get(req.params.question_id)
      .then((data) => {
        res.status(200).send(data.rows);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send(err);
      });
  },

  postAnswer(req, res) {
    const questionId = req.params.question_id;
    const { body } = req.query;
    const dateWritten = Date.now();
    const answererName = req.query.answerer_name;
    const answererEmail = req.query.answerer_email;

    return post(questionId, body, dateWritten, answererName, answererEmail)
      .then((response) => {
        // handle data
        res.status(201).send(response);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send(err.stack);
      });
  },

  reportAnswer(req, res) {
    const answerId = req.params.answer_id;
    return report(answerId)
      .then(() => res.sendStatus(204))
      .catch((err) => {
        console.error(err.stack);
        res.status(500).send(err.stack);
      });
  },

  markHelpfulAnswer(req, res) {
    const answerId = req.params.answer_id;
    return markHelpful(answerId)
      .then(() => res.sendStatus(204))
      .catch((err) => {
        console.error(err.stack);
        res.status(500).send(err.stack);
      });
  },

};
