/* eslint-env jest */

const questionModels = require('../server/models/questions');

jest.mock('../server/models/questions');

const {
  getQuestions, postQuestion, reportQuestion, markHelpfulQuestion,
} = require('../server/controllers/questions');

const mockReq = { query: { product_id: 41009 }, params: {} };
const mockRes = {
  send(data) {
    this.response = data;
  },
  status(code) {
    this.code = code;
  },
  sendStatus(code) {
    this.sendCode = code;
  },
};
const mockData = {
  rows: [
    { some: 'data' },
    { more: 'data' },
  ],
};

module.exports = () => {
  describe('Questions Controllers', () => {
    test('getQuestions', async () => {
      questionModels.get.mockResolvedValue('I have been called once');
      await getQuestions(mockReq, mockRes)
        .then(() => {
          expect(questionModels.get).toHaveBeenCalled();
          expect(mockRes.response).toBe('I have been called once');
          expect(mockRes.response).toBeTruthy();
        });
    });
  });
};
