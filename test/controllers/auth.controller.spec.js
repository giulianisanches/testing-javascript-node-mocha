const expect = require("chai").expect;
const authController = require("../../controllers/auth.controller");
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const sinon = require("sinon");

chai.use(chaiAsPromised);
chai.should();

describe("AuthController", function () {
  beforeEach(function setupRoles() {
    console.log("Running before each");
    authController.setRoles(["user"]);
  });

  describe("isAuthorized", function () {
    it("Should return false if not authorized", function () {
      let isAuth = authController.isAuthorized("admin");

      expect(isAuth).to.be.false;
    });

    it("Should return true if authorized", function () {
      authController.setRoles(["user", "admin"]);
      let isAuth = authController.isAuthorized("admin");

      isAuth.should.be.true;
    });

    it("Should not allow get if not authorized");
    it("Should allow get if authorized");
  });

  describe("isAuthorizedAsync", function () {
    it("Should return false if not authorized", function (done) {
      authController.isAuthorizedAsync("admin", function (isAuth) {
        expect(isAuth).to.be.false;
        done();
      });
    });
  });

  describe("isAuthorizedPromise", function () {
    it("Should return false if not authorized", function () {
      return authController.isAuthorizedPromise("admin").should.eventually.be
        .false;
    });
  });

  describe("getIndex", function () {
    it("Should render index", function () {
      let req = {};
      let res = {
        render: sinon.spy(),
      };

      authController.getIndex(req, res);
      res.render.calledOnce.should.be.true;
      res.render.firstCall.args[0].should.equal("index");
    });
  });
});
