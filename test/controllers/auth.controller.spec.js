var assert = require("assert");
var authController = require("../../controllers/auth.controller");

describe("AuthController", function () {
  beforeEach(function setupRoles() {
    console.log("Running before each");
    authController.setRoles(["user"]);
  });

  describe("isAuthorized", function () {
    it("Should return false if not authorized", function () {
      assert.equal(false, authController.isAuthorized("admin"));
    });

    it("Should return true if authorized", function () {
      authController.setRoles(["user", "admin"]);
      assert.equal(true, authController.isAuthorized("admin"));
    });

    it("Should not allow get if not authorized");
    it("Should allow get if authorized");
  });

  describe("isAuthorizedAsync", function () {
    it("Should return false if not authorized", function (done) {
      authController.isAuthorizedAsync("admin", function (isAuth) {
        assert.equal(false, isAuth);
        done();
      });
    });
  });
});
