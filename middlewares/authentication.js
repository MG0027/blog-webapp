const { validateToken } = require("../services/authentication");

function checkForAuthenticationCookie(cookieName) {
  return (req, res, next) => {
    const tokenCookieValue = req.cookies[cookieName];
    if (!tokenCookieValue) {
      return next();
    }

    try {
      const userPayload = validateToken(tokenCookieValue);
      req.user = userPayload;  // yha pe tokencokie value === userpayload kr bhi skte h but koi need nhi h uske bina bhi logic toh shi chlta h
    } catch (error) {}

    return next();
  };
}

module.exports = {
  checkForAuthenticationCookie,
};

// we use try catch taki kuch error aye toh pta chl jaye aur site crash na ho