const passport = require("passport");
const Router = require("express").Router;
const AuthControler = require("../controler/AuthControler.js");
const isLoggedIn = require("../UserMiddleware/login.js").isLoggedIn;

const authRouter = Router();
authRouter.get("/", AuthControler.googleLink);
authRouter.get("/auth/google/", passport.authenticate("google", { scope: ["email", "profile"] }));
authRouter.get("/protected", isLoggedIn, AuthControler.protectedApi);
authRouter.get("/auth/failure", AuthControler.failurerApi);
authRouter.get("/logout", AuthControler.logout);

module.exports = authRouter;
