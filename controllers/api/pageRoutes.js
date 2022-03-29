const router = require('express').Router();
const { Page, PageComponent } = require('../../models');

router.get('/:id', async (req, res) => {
  try {
    const pageData = await Page.findByPk(req.params.id, {
      include: [
        {
          model: PageComponent,
        },
      ],
    });
    res.status(200).json(pageData.get({ plain: true }));
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
