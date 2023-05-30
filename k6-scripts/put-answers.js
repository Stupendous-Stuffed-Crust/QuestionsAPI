/* eslint-disable func-names */
/* eslint-disable import/no-unresolved */
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '5s', target: 1000 },
    { duration: '20s', target: 1000 },
    { duration: '5s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(99)<2000'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  const answerId = Math.floor((Math.random() * 687930) + 6191376);
  const res = http.put(`http://localhost:3000/qa/answers/${answerId}/helpful`, {
    tags: { name: 'putAnswers URL' },
  });
  check(res, { 'status was 204': (r) => r.status === 204 });
  sleep(1);
}
