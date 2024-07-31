const passport = require("passport");
const {createUser,homePage,logIn,logout,signGoogle,redirect} = require("../controllers/userController");
const router = require("express").Router();



router.post("/createuser",createUser);
router.get("/",homePage);

router.post("/login",logIn);
router.post("/logout",logout);

router.get("/googlesignup",signGoogle);
router.get("/google/callback",redirect);


router.get("/auth/google/success",async(req,res) =>{
    try {
     console.log(req.user._json);

       res.send(`successful`);
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
                 
    }

})


module.exports = router;