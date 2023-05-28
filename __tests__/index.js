/* eslint-env jest */

const app = require('../server/app');
const { pool } = require('../server/db');

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

beforeEach(async () => {
  await pool.query('BEGIN');
});

afterEach(async () => {
  await pool.query('ROLLBACK');
});

describe('Server Routes', () => {
  questionsTests(app);
});
