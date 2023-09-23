const router = require("express").Router();
const passport = require("passport");
const CLIENT_URL = "http://localhost:3000";
router.get("/login/failed" , (req,res) => {
    res.send(401).json({
        success: false,
        message: "failure"
    }
    )
})
router.get("/login/success" , (req,res) => {
    console.log(req.user);
    
        res.send(200).json({
            success: true,
            message: "success",
            user: req.user,
        }
        )
    
    
})
router.get("/logout", (req, res) => {
    req.logOut();
    res.redirect(CLIENT_URL);
})
router.get("/google", passport.authenticate("google", {scope: ["profile"]}));
router.get("/google/callback", passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login"
}))

module.exports = router;