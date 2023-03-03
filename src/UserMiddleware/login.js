const isLoggedIn = function isLoggedIn(req, res, next) {
   req.user ? next() : res.sendStatus(401);
 };
 
 exports.isLoggedIn = isLoggedIn;