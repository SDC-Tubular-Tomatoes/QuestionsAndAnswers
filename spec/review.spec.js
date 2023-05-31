/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const request = require('supertest');
const app = require('../server/index');

let server;
beforeAll(() => {
  server = app.listen(3001);
});
afterAll((done) => {
  server.close(done);
});

describe('API routes', () => {
  describe('Reviews', () => {
    it('should respond with 200 status code when sending a get request for reviews list', async () => {
      const agent = request.agent(app);
      const res = await agent
        .get('/api/reviews')
        .expect(200);
    });

    it('should respond with 200 status code when sending a get request for metadata', async () => {
      const agent = request.agent(app);
      const res = await agent
        .get('/api/reviews/meta')
        .expect(200);
    });

    // it('should respond with 204 status code', async () => {
    //   const agent = request.agent(app);
    //   const res = await agent
    //     .post('/api/reviews').send({
    //       product_id: 40345,
    //       rating: 4,
    //       summary: 'lookd good',
    //       body: 'I like how it looks and I will bay another one',
    //       recommend: true,
    //       name: 'Falafel',
    //       email: 'falafel@gmail.com',
    //       photos: [],
    //       characteristics: {},
    //     })
    //     .expect(201);
    // });

    it('should respond with 204 status code when marked helpful', async () => {
      const agent = request.agent(app);
      const res = await agent
        .put('/api/reviews/1277522/helpful')
        .expect(204);
    });

    it('should respond with 204 status code when reported', async () => {
      const agent = request.agent(app);
      const res = await agent
        .put('/api/reviews/1277522/report')
        .expect(204);
    });
  });
});
