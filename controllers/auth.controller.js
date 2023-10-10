function AuthController() {
  function isAuthorized(roles, needRole) {
    return roles.indexOf(needRole) >= 0;
  }

  return { isAuthorized };
}

module.exports = AuthController();
