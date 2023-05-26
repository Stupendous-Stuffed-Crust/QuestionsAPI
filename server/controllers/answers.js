const { get, post } = require('../models/answers');

module.exports = {
  getAnswers(req, res) {
    get(req.query.question_id)
      .then((data) => {
        res.status(200).send(data.rows);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send(err);
      });
  },

  postAnswer(req, res) {
    const questionId = req.body.question_id;
    const { body } = req.body;
    const dateWritten = req.body.date_written;
    const answererName = req.body.answerer_name;
    const answererEmail = req.body.answerer_email;

    post(questionId, body, dateWritten, answererName, answererEmail)
      .then((data) => {
        // handle data
        res.status(201).send(data.data);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send(err);
      });
  },

  // reportAnswer(req, res) {
  // },

  // markHelpfulAnswer(req, res) {

  // },

};
