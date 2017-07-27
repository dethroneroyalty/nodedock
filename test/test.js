const {expect} = require("chai");
const http = require("http");
const app = require("../app");

describe("Root", () => {
  let server;
  before((done) => {
    server = app.listen(3001, done);
  });

  context("Get to '/'", () => {
    let res;
    beforeEach((done) => {
      http.get({
        hostname: 'localhost',
        port: 3001,
        path: '/'
      }, (_res) => {
        res = _res;
        done();
      });
    });

    it("receive respose with status OK", () => {
      expect(res.statusCode).to.be.equal(200);
    });
  })

  after((done) => {
    server.close(done);
  })
})
