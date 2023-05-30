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
  const questionId = Math.floor((Math.random() * 351896) + 3167067);
  const count = Math.floor((Math.random() * 99) + 1);
  const res = http.get(`http://localhost:3000/qa/questions/${questionId}/answers?page=1&count=${count}`, {
    tags: { name: 'getAnswers URL' },
  });
  check(res, { 'status was 200': (r) => r.status === 200 });
  sleep(1);
}
