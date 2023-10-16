function AuthController() {
  var roles;
  function setRoles(role) {
    roles = role;
  }
  function isAuthorized(needRole) {
    return roles.indexOf(needRole) >= 0;
  }

  function isAuthorizedAsync(needRole, cb) {
    setTimeout(function () {
      cb(roles.indexOf(needRole) >= 0);
    }, 0);
  }

  function isAuthorizedPromise(needRole) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve(roles.indexOf(needRole) >= 0);
      }, 0);
    });
  }

  return { isAuthorized, isAuthorizedAsync, setRoles, isAuthorizedPromise };
}

module.exports = AuthController();
