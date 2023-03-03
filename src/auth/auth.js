const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const User = require("../models/userModel");
const GOOGLE_CLIENT_ID =
  "575156561411-qb7j7j71ba3cmqonsnb4icgceha9fsaa.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:8000/google/callback'
},
async (accessToken, refreshToken, profile, done) => {
  try {
    const [user] = await  User.findOrCreate({
      where: { googleId: profile.id },
      defaults: {
        displayName: profile.displayName,
        email: profile.emails[0].value
      }
    });
    return done(null, user);
  } catch (err) {
    return done(err);
  }
}
));

passport.serializeUser((user, done) => {
done(null, user.id);
});

passport.deserializeUser((id, done) => {
User.findByPk(id).then(user => {
  done(null, user);
});
});

