/* eslint-env jest */

const request = require('supertest');
const { pool } = require('../server/db');

module.exports = (app) => {
  describe('Questions Routes', () => {
    beforeAll(async () => {
      await pool.query('BEGIN');
    });
    afterAll(async () => {
      await pool.query('ROLLBACK');
    });

    const agent = request(app);

    test('Should GET question when request is sent to /qa/questions', async () => {
      const productId = 41009;

      const response = await agent.get('/qa/questions')
        .query({ product_id: productId });
      expect(response.status).toBe(200);
    });

    test('Should POST question when request is sent to /qa/questions', async () => {
      const response = await agent.post('/qa/questions')
        .query({
          product_id: 41009,
          body: 'fake test question',
          date_written: Date.now(),
          name: 'fakeName',
          email: 'fake.email.com',
        });
      expect(response.status).toBe(201);
    });

    test('Should mark question helpful when PUT request is sent to /qa/questions/:question_id/helpful', async () => {
      const questionId = 144400;

      await agent.put(`/qa/questions/${questionId}/helpful`)
        .expect(204);
    });

    test('Should report question when PUT request is sent to /qa/questions/:question_id/report', async () => {
      const questionId = 144400;

      await agent.put(`/qa/questions/${questionId}/report`)
        .expect(204);
    });
  });
};
