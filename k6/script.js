/* eslint-disable func-names */
/* eslint-disable import/no-unresolved */
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 2000 },
    { duration: '30s', target: 2000 },
    { duration: '30s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(99)<2000'], // 99% of requests complete in less than 2s
    http_req_failed: ['rate<0.01'], // less than 1% requests failed
  },
};

export default function () {
  // Randomly select a question count query param between the default of 5 and upper limit of 100
  const count = Math.floor((Math.random() * 95) + 5);
  // Randomly select a product Id from the last 10% of the table
  const productId = Math.floor((Math.random() * 100001) + 900010);
  const res = http.get(`http://localhost:3000/qa/questions?product_id=${productId}&page=1&count=${count}`, {
    tags: { name: 'getQuestions URL' },
  });
  check(res, { 'status was 200': (r) => r.status === 200 });
  sleep(1);
}
