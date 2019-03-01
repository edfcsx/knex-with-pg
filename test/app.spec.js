/* eslint-disable*/
const request = require('supertest');
const expect = require('chai').expect;
const app = require('../app');

describe('CRUD stickers', () => {

  describe('Stickers API', () => {
    it('Lists all records', (done) => {
      request(app)
        .get('/api/v1/stickers')
        .set('Accept', 'application/json')
        .expect('Content-type', /json/)
        .expect(200)
        .then((response) => {
          expect(response.body).to.be.a('array');
          done();
        })
    });
  });

});
