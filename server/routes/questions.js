const express = require('express');
const { getQuestions, postQuestion } = require('../controllers/questions');

const router = express.Router();

router.get('/qa/questions', getQuestions);

router.post('/qa/questions', postQuestion);

module.exports.questionRouter = router;
