/* eslint-env jest */

const request = require('supertest');

module.exports = (app) => {
  describe('Answers Routes', () => {
    const agent = request(app);

    test('Get Answers', async () => {
      const questionId = 142004;
      const response = await agent.get(`/qa/questions/${questionId}/answers`);
      expect(response.status).toBe(200);
      expect(response.body.length > 0).toBe(true);
    });
  });
};
