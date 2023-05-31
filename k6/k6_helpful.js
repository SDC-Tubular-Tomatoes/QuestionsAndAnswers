/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1s', target: 1100 },
    { duration: '28s', target: 1100 },
    { duration: '1s', target: 1100 },
  ],
};

export default function () {
  const random_review_id = Math.floor(900000 + Math.random() * 100000);
  const res = http.put(http.url`http://localhost:3000/api/reviews/${random_review_id}/helpful`);
}
