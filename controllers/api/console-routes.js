const router = require('express').Router();
const { Console, Category } = require('../../models');

// The `/api/consoles` endpoint

router.get('/', (req, res) => {
  // find all consoles
  Console.findAll({
  // be sure to include its associated Products
  include: [
    {
      model: Category,
      attributes: ['category_name']
    }
  ]
  })
  .then(dbConsoleData => res.json(dbConsoleData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  // find one console by its `id` value
  Console.findOne({
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
    .then(dbConsoleData => {
      if (!dbConsoleData) {
        res.status(404).json({ message: 'No console found with this id' });
        return;
      }
      res.json(dbConsoleData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new console
  Console.create({
    console_name: req.body.console_name,
    price: req.body.price,
    stock: req.body.stock,
    category_id: req.body.category_id
  })
    .then(dbConsoleData => res.json(dbConsoleData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a console by its `id` value
  Console.update({
      console_name: req.body.console_name,
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
    .then(dbConsoleData => {
      if (!dbConsoleData) {
        res.status(404).json({ message: 'No console found with this id' });
        return;
      }
      res.json(dbConsoleData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete a console by its `id` value
  Console.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbConsoleData => {
      if (!dbConsoleData) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(dbConsoleData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
