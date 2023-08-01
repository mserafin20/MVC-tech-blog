const router = require('express').Router();
const { Post, Blogger, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get("/", async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: Blogger,
                    attributes: ['username'],
                },
                {
                    model: Comment,
                    attributes: ['message']
                },
            ],
        });
        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.session.blogger_id, {
            include: [
                {
                    model: Blogger,
                    attributes: ['username'],
                },
            ],
        });
        const posts = postData.get({ plain: true });

        res.render('post', {
            ...post,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await Blogger.findByPk(req.session.blogger_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Post }],
      });
  
      const blogger = bloggerData.get({ plain: true });
  
      res.render('profile', {
        ...blogger,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });

module.exports = router; 