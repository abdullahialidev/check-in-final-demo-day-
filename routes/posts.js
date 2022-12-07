const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.post("/api/chat", postsController.sendChat);

router.post("/createPost", postsController.createPost);

router.get("/review/:id", postsController.getReview);

router.post("/completeReview/:id", postsController.completeReview);

router.post("/deleteReview/:id", postsController.deleteReview);

module.exports = router;
