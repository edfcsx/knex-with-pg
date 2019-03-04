import request from 'supertest';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import app from '../app';

describe('CRUD stickers', () => {
  describe('Stickers API', () => {
    it('should get all records', () => {
      request(app)
        .get('/api/v1/stickers')
        .set('Accept', 'application/json')
        .expect('Content-type', /json/)
        .expect(200)
        .then((response) => {
          expect(response.body).to.be.a('array');
        });
    });

    it('should one record by id', (done) => {
      request(app)
        .get('/api/v1/stickers/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) => {
          expect(response.body).to.be.a('array');
          return done();
        });
    });

    it('should create a record', (done) => {
      request(app)
        .post('/api/v1/stickers/')
        .send({
          title: 'github',
          description: 'GitHub Logo',
          rating: 10,
          url: 'https://devstickers.com/assets/img/pro/4mh6.png',
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) => {
          expect(response.body).to.be.a('object');
          return done();
        });
    });

    it('should update a record', (done) => {
      request(app)
        .put('/api/v1/stickers/1')
        .send({
          title: 'git',
          description: 'Git Logo',
          rating: 10,
          url: 'https://devstickers.com/assets/img/pro/4mh6.png',
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) => {
          expect(response.body).to.be.a('object');
          return done();
        });
    });

    it('should delete a record', (done) => {
      request(app)
        .delete('/api/v1/stickers/10')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) => {
          expect(response.body).to.be.a('object');
          return done();
        });
    });
  });
});
