const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// getting all comments
router.get("/", async (req, res) => {
    try {
        const commentData = await Comment.findAll();
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Creating a new comment
router.post('/', withAuth, async (req,res) => {
    try {
        const newComment = await Comment.create(req.body);
        console.log(newComment);
        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;