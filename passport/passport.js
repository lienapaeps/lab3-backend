const passport = require('passport');
const User = require('../models/user');
const config = require('config');

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// webtokens
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.get('jwt.secret');

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    try {
        User.findOne({_id: jwt_payload.uid}).then(user => {
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        })
    }
    catch (err) {
        return done(err, false);
    }
}));

module.exports = passport;