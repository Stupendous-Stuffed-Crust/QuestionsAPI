/* eslint-env jest */
const app = require('../server/index');

const questionsTests = require('./questions.test');

let server;

// start a test server before each all tests
beforeAll(() => {
  server = app.listen(3001);
});

// after tests shut down the server
afterAll((done) => {
  server.close();
  done();
});

describe('Server Routes', () => {
  questionsTests(app);
});
