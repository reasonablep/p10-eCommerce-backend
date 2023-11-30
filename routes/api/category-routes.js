const router = require('express').Router();
const { Category, Product } = require('../../models');

// Find category (all)

router.get('/', async (req, res) => {

    try {
       const categories = await Category.findAll({
        include: [Product]
       });
       
       res.status(200).json(categories);
    } catch (err) {
        res.status(500).json(err);
    }

});

// Find category by ID

router.get('/:id', async (req, res) => {

  try {
    const category = await Category.findByPk(req.params.id, {
      include: [Product],
    });

    if (!category) {
      res.status(404).json({ message: 'No category found'});
      return;
    }
    res.status(200).json(category);

  } catch (error) {
    res.status(500).json(err);
  }
});


// New category creation

router.post('/', async (req, res) => {

  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);

  } catch (err) {
    res.status(500).json(err);
  }

});

// Category update by ID

router.put('/:id', async (req, res) => {

  try {
    const updateCategory = await Category.update(req.body, {
      where: { id: req.params.id

      }
    })
    if (!updateCategory) {
      res.status(404).json('No category found');
      return;
    } 
    
    res.status(200).json('Category updated successfully');

  } catch (err) {

      res.status(500).json(err);
    }

});

// Category delete by ID

router.delete('/:id', async (req, res) => {

  try {

  const deleteCategory = await Category.destroy({
    where: {
      id: req.params.id,
    },
  });

  if (!deleteCategory) {
    res.status(404).json({ message: 'No category found!'});
    return;
  }

  res.status(200).json({ message: 'Category deleted successfully'})
}catch (err) {
  res.status(500).json (err)

}

});


module.exports = router;
