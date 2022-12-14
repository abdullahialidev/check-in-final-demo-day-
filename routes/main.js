const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Routes
router.get("/", homeController.getIndex);
router.get("/profile", ensureAuth, postsController.getProfile);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/mood", ensureAuth, postsController.getMood);
router.get("/chat", ensureAuth, postsController.getChat);
router.get("/review/:id", ensureAuth, postsController.getReview);
router.post("/chat", ensureAuth, postsController.sendChat);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

router.post("/", postsController.createPost);

module.exports = router;
