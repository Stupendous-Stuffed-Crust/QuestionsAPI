/* eslint-env jest */

const app = require('../server/app');
const { pool, close } = require('../server/db');

const questionsTests = require('./questions.test');
const controllersTests = require('./controllers.test');
const answersTests = require('./answers.test');

let server;

// start a test server before each all tests
beforeAll(() => {
  server = app.listen(3001);
});

// after tests shut down the server
afterAll((done) => {
  server.close();
  close();
  done();
});

beforeEach(async () => {
  await pool.query('BEGIN');
});

afterEach(async () => {
  await pool.query('ROLLBACK');
});

describe('Server Routes', () => {
  questionsTests(app);
  answersTests(app);
  controllersTests();
});
