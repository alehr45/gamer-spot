const router = require('express').Router();
const { Merchandise, Category } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all merchandise
  Merchandise.findAll({
  // be sure to include its associated Products
  include: [
    {
      model: Category,
      attributes: ['category_name']
    }
  ]
  })
  .then(dbMerchandiseData => res.json(dbMerchandiseData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  // find one merchandise item by its `id` value
  Merchandise.findOne({
    where: {
      id: req.params.id
    },
    // be sure to include its associated Products
    include: [
      {
        model: Category,
        attributes: ['category_name']
      }
    ]
  })
    .then(dbMerchandiseData => {
      if (!dbMerchandiseData) {
        res.status(404).json({ message: 'No merchandise found with this id' });
        return;
      }
      res.json(dbMerchandiseData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new merchandise item
  Merchandise.create({
    merchandise_name: req.body.merchandise_name,
  })
    .then(dbMerchandiseData => res.json(dbMerchandiseData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update merchandise by its `id` value
  Merchandise.update(
    {
      merchandise_name: req.body.merchandise_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbMerchandiseData => {
      if (!dbMerchandiseData) {
        res.status(404).json({ message: 'No merchandise found with this id' });
        return;
      }
      res.json(dbMerchandiseData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete merchandise by its `id` value
  Merchandise.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbMerchandiseData => {
      if (!dbMerchandiseData) {
        res.status(404).json({ message: 'No merchandise found with this id' });
        return;
      }
      res.json(dbMerchandiseData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
