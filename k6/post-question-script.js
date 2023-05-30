/* eslint-disable func-names */
/* eslint-disable import/no-unresolved */
import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1s', target: 10 },
    { duration: '28s', target: 10 },
    { duration: '1s', target: 10 },
  ],
  thresholds: {
    http_req_duration: ['p(99)<2000'], // 99% of requests complete in less than 2s
    http_req_failed: ['rate<0.01'], // less than 1% requests failed
  },
};

export default function () {
  const productId = Math.floor((Math.random() * 100001) + 900010);
  const body = 'test question';
  const name = 'lorem';
  const email = 'ipsum@gmail.com';
  // const payload = JSON.stringify({
  //   product_id: productId,
  //   body: 'test test',
  //   name: 'lorem',
  //   email: 'ipsum@gmail.com',
  // });
  // const headers = { 'Content-Type': 'application/json' };
  // http.post('http://localhost:3000/qa/questions', payload, { headers });
  http.post(`http://localhost:3000/qa/questions?body=${body}&name=${name}&email=${email}&product_id=${productId}`, {
    tags: { name: 'postQuestion URL' },
  });
  sleep(1);
}
