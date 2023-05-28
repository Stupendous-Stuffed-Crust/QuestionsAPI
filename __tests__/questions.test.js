/* eslint-env jest */

const request = require('supertest');

module.exports = (app) => {
  describe('Questions Routes', () => {
    const agent = request(app);

    test('Should GET question when request is sent to /qa/questions', async () => {
      const productId = 41009;

      const response = await agent.get('/qa/questions')
        .query({ product_id: productId });
      expect(response.status).toBe(200);
    });

    // THIS TEST IS FAILING. Recieving status 500.
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

    // Need to mock db as we dont want to be changing real data;
    test('Should mark question helpful when PUT request is sent to /qa/questions/:question_id/helpful', async () => {
      const questionId = 144400;

      await agent.put(`/qa/questions/${questionId}/helpful`)
        .expect(204);
    });

    // Need to mock db as we dont want to be changing real data;
    test('Should report question when PUT request is sent to /qa/questions/:question_id/report', async () => {
      const questionId = 144400;

      await agent.put(`/qa/questions/${questionId}/report`)
        .expect(204);
    });
  });
};
