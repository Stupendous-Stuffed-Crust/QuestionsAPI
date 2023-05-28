/* eslint-env jest */

jest.mock('../server/models/questions');
const questionModels = require('../server/models/questions');

const {
  getQuestions, postQuestion, reportQuestion, markHelpfulQuestion,
} = require('../server/controllers/questions');

const mockReq = { query: {}, params: {} };
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

describe('Questions Controllers', () => {
  test('getQuestions', async () => {
    questionModels.get.mockResolvedValue('I have been called once');
    await getQuestions(mockReq, mockRes)
      .then(() => {
        expect(mockRes.response).toBeTruthy();
        expect(mockRes.response).toBe('I have been called once');
        expect(questionModels.get).toHaveBeenCalled();
      });
  });
});
