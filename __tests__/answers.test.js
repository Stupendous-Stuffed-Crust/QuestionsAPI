/* eslint-env jest */

const request = require('supertest');
const { pool } = require('../server/db');

module.exports = (app) => {
  describe('Answers Routes', () => {
    beforeAll(async () => {
      await pool.query('BEGIN');
    });
    afterAll(async () => {
      await pool.query('ROLLBACK');
    });

    const agent = request(app);
    const questionId = 142004;
    let answerCount;

    test('Get Answers', async () => {
      const response = await agent.get(`/qa/questions/${questionId}/answers`);
      expect(response.status).toBe(200);
      answerCount = response.body.length;
      expect(answerCount > 0).toBe(true);
    });

    let testAnswerId;
    test('Post Answer', async () => {
      const response = await agent.post(`/qa/questions/${questionId}/answers`)
        .query({
          body: 'new test answer',
          answerer_name: 'testy person',
          answerer_email: 'tester@test.com',
        });
      expect(response.status).toBe(201);
      const newAnswers = await agent.get(`/qa/questions/${questionId}/answers`);
      newAnswers.body.forEach((answer) => {
        if (answer.answerer_name === 'testy person') {
          testAnswerId = answer.id;
        }
      });
      expect(newAnswers.body.length).toBe(answerCount + 1);
    });

    test('Mark Answer helpful', async () => {
      let helpfulCount;
      await agent.put(`/qa/answers/${testAnswerId}/helpful`)
        .expect(204);
      const answers = await agent.get(`/qa/questions/${questionId}/answers`);
      answers.body.forEach((answer) => {
        if (answer.answerer_name === 'testy person') {
          helpfulCount = answer.helpful;
        }
      });
      expect(helpfulCount).toBe(1);
    });

    test('Report Answer', async () => {
      await agent.put(`/qa/answers/${testAnswerId}/report`)
        .expect(204);
      let reported = true;
      const answers = await agent.get(`/qa/questions/${questionId}/answers`);
      answers.body.forEach((answer) => {
        if (answer.answerer_name === 'testy person') {
          reported = false;
        }
      });
      expect(reported).toBe(true);
    });
  });
};
