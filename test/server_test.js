var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();
var request = require('supertest');

describe('loading express', function () {

  var server;
  var parsedJSON = require('../hipstercoffee.json');

  beforeEach(function () {
    server = require('../server.js');
  });

  afterEach(function () {
    server.close();
  });

  it('server status of / is 200', function testRoot(done) {
    request(server)
      .get('/')
      .expect(200, done);
  });

  describe('returning JSON', function() {

    it('all hipstercoffee information', function (done) {
      request(server)
        .get('/')
        .expect(200)
        .expect(JSON.stringify(parsedJSON))
        .end(done);
    });

    it('address', function (done) {
      request(server)
        .get('/address')
        .expect(200)
        .expect(`"123 Lakeside Way"`)
        .end(done);
    });

    it('shop name', function (done) {
      request(server)
        .get('/shopName')
        .expect(200)
        .expect(`"The Coffee Connection"`)
        .end(done);
    });

    it('phone number', function (done) {
      request(server)
        .get('/phone')
        .expect(200)
        .expect(`"16503600708"`)
        .end(done);
    });

    describe('individual prices of item', function () {

      it('price of Cafe Latte', function (done) {
        request(server)
          .get('/prices/Cafe Latte')
          .expect(200)
          .expect(`4.75`)
          .end(done);
      });

      it('price of Muffin Of The Day', function (done) {
        request(server)
          .get('/prices/Muffin Of The Day')
          .expect(200)
          .expect(`4.55`)
          .end(done);
      });

    })


  });

});
