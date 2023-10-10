function AuthController() {
  function isAuthorized(roles, needRole) {
    return roles.indexOf(needRole) >= 0;
  }

  function isAuthorizedAsync(roles, needRole, cb) {
    setTimeout(function () {
      cb(roles.indexOf(needRole) >= 0);
    }, 0);
  }

  return { isAuthorized, isAuthorizedAsync };
}

module.exports = AuthController();
