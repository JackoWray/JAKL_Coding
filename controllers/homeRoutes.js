const router = require('express').Router();
const { User, Page } = require('../models');
const withAuth = require('../helpers/auth');

// Get homepage handlebar, blogs, navbar and login.

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { id: req.session.user_id },
      attributes: { exclude: ['password'] },
      include: [
        {
          model: Page,
          attributes: ['title'],
        },
      ],
    });

    res.render('dashboard', {
      pages: userData,
      name: req.session.name,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', withAuth, (req, res) => {
  res.redirect('/dashboard');
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('signup');
});

router.get('/create', withAuth, (req, res) => {
  res.render('edit', { logged_in: req.session.logged_in });
});

module.exports = router;
