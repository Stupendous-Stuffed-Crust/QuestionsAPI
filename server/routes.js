const express = require('express');
const { getQuestions, postQuestion } = require('./controllers/questions');
const { getAnswers, postAnswer } = require('./controllers/answers');

const router = express.Router();

router.get('/questions', getQuestions);
router.post('/questions', postQuestion);
router.put('/questions/:question_id/helpful');
router.put('/questions/:question_id/report');

router.get('/questions/:question_id/answers', getAnswers);
router.post('/questions/:question_id/answers', postAnswer);
router.put('/answers/:answer_id/helpful');
router.put('/answers/:answer_id/report');

module.exports.router = router;
