const router = require('express').Router();
const postRoutes = require('./postRoutes');
const bloggerRoutes = require('./bloggerRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/posts', postRoutes);
router.use('/bloggers', bloggerRoutes);
router.use('/comments', commentRoutes);

module.exports = router;