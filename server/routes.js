const express = require('express');
const {
  getQuestions, postQuestion, reportQuestion, markHelpfulQuestion,
} = require('./controllers/questions');
const {
  getAnswers, postAnswer, reportAnswer, markHelpfulAnswer,
} = require('./controllers/answers');

const router = express.Router();

router.get('/questions', getQuestions);
router.post('/questions', postQuestion);
router.put('/questions/:question_id/report', reportQuestion);
router.put('/questions/:question_id/helpful', markHelpfulQuestion);

router.get('/questions/:question_id/answers', getAnswers);
router.post('/questions/:question_id/answers', postAnswer);
router.put('/answers/:answer_id/report', reportAnswer);
router.put('/answers/:answer_id/helpful', markHelpfulAnswer);

module.exports.router = router;
