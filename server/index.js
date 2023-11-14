const passport = require("passport");
const session = require("express-session");
var GoogleStrategy = require("passport-google-oauth20").Strategy;
const express = require("express");
const app = express();

app.use(express.json());
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "295964992284-n7il0qrubiif6of6esghlqheqrbpi4tt.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
      console.log("profile");

      return done(null, profile);
      //   });
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
  //   https://www.googleapis.com/auth/plus.login
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    console.log(req.user);
    // Successful authentication, redirect home.
    // console.log("object");
    res.send("Success");
  }
);

app.listen(3000, () => console.log("server running at port 3000"));
