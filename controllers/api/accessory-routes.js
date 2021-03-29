const router = require('express').Router();
const { Accessory, Category } = require('../../models');

// The `/api/accessories` endpoint

router.get('/', (req, res) => {
  // find all accessories
  Accessory.findAll({
  // be sure to include its associated Products
  include: [
    {
      model: Category,
      attributes: ['category_name']
    }
  ]
  })
  .then(dbAccessoryData => res.json(dbAccessoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  // find one accessory by its `id` value
  Accessory.findOne({
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
    .then(dbAccessoryData => {
      if (!dbAccessoryData) {
        res.status(404).json({ message: 'No accessories found with this id' });
        return;
      }
      res.json(dbAccessoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new accessory
  Accessory.create({
    accessory_name: req.body.accessory_name,
    price: req.body.price,
    stock: req.body.stock,
    category_id: req.body.category_id
  })
    .then(dbAccessoryData => res.json(dbAccessoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update an accessory by its `id` value
  Accessory.update({
      accessory_name: req.body.accessory_name,
      price: req.body.price,
      stock: req.body.stock,
      category_id: req.body.category_id
    },
    {
      where: {
        id: req.params.id
      },
    }
  )
    .then(dbAccessoryData => {
      if (!dbAccessoryData) {
        res.status(404).json({ message: 'No accessory found with this id' });
        return;
      }
      res.json(dbAccessoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete an accessory by its `id` value
  Accessory.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbAccessoryData => {
      if (!dbAccessoryData) {
        res.status(404).json({ message: 'No accessory found with this id' });
        return;
      }
      res.json(dbAccessoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
