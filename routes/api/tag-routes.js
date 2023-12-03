const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// Find all tags

router.get('/', async (req, res) => {
  try {
    const getTags = await Tag.findAll ({
      include: [{ model: Product, through: ProductTag }],
    });
    res.status(200).json(getTags);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Find tag by ID

router.get('/:id', async (req, res) => {
  try {
    const getTag = await Tag.findByPk(req.params.id, {

      include: [{ model: Product, through: ProductTag}
      ]
    });
  if (!getTag) {
    res.status(404).json({ message: 'No tag found' });
  }
  res.status(200).json(getTag);
} catch (err) {
  res.status(500).json (err);
}
});

// Create a new tag

router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(201).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }

});

// Update tag by ID

router.put('/:id', async (req, res) => {

  try {
    const updateTag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      }
    });
if (!updateTag) {
  res.status(404).json({ message: 'No tag found' });
  return;
}

res.status(200).json('Tag updated successfully');

  } catch(err) {
    res.status(500).json(err);
  }

});

// Delete tag by ID

router.delete('/:id', async (req, res) => {
  try {
    const deleteTag = await Tag.destroy ({
      where: {
        id: req.params.id,
      }
    });
    if (!deleteTag) {
      res.status(404).json ({ message: 'No tag found'});
      return;
    }
    res.status(200).json({ message: 'Tag deleted successfully'});
    
  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;
