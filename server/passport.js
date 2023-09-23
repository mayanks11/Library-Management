const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GOOGLE_CLIENT_ID = "674552719944-drt3gebi97rmo2cjnoslj88ll2t441nt.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
const user = require('./models/user');
const passport = require("passport");

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);
    done(null, profile);
    const user = {
        username: profile.displayName,
        avatar: profile.photos[0],
    }
    // user.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
  }
));

passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});