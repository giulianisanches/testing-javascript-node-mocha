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

  return { isAuthorized, isAuthorizedAsync, setRoles };
}

module.exports = AuthController();
