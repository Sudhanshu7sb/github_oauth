var passport = require('passport');

var GitHubStrategy = require('passport-github').Strategy;

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
//    console.log(profile);
   cb(null,profile)
   
  }
));

passport.serializeUser((user, cb) => {
    console.log("serialize");
    cb(null, user.id);
});

passport.deserializeUser((id, done) => {
    console.log("deserialize");
    
    // User.findById(id, (err, user) => {
    //     if (err) return done(err, false)
    //     done(null, user);
    // })
    // console.log(id);
    done(null,{name:"SSb"})
    
})

