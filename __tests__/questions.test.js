/* eslint-env jest */

const request = require('supertest');

module.exports = (app) => {
  describe('Questions Routes', () => {
    const agent = request(app);

    test('Should successfully GET question when request is sent to qa/questions', async () => {
      const productId = 41009;

      await agent.get('/qa/questions')
        .query({ product_id: productId })
        .expect(200);
    });

    // Need to mock db as we dont want to be changing real data;
    test('Should successfully mark question helpful when PUT request is sent to qa/questions/:question_id/helpful', async () => {
      const questionId = 144400;

      await agent.put(`/qa/questions/${questionId}/helpful`)
        .expect(204);
    });

    // Need to mock db as we dont want to be changing real data;
    test('Should successfully report question when PUT request is sent to qa/questions/:question_id/report', async () => {
      const questionId = 144400;

      await agent.put(`/qa/questions/${questionId}/report`)
        .expect(204);
    });
  });
};
