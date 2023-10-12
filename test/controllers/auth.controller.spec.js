let expect = require("chai").expect;
let authController = require("../../controllers/auth.controller");

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

      expect(isAuth).to.be.true;
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
});
