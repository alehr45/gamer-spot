const router = require('express').Router();
const { Game, Category } = require('../../models');

// The `/api/games` endpoint

router.get('/', (req, res) => {
  // find all games
  Game.findAll({
  // be sure to include its associated Products
  include: [
    {
      model: Category,
      attributes: ['category_name']
    }
  ]
  })
  .then(dbGameData => res.json(dbGameData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  // find one game by its `id` value
  Game.findOne({
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
    .then(dbGameData => {
      if (!dbGameData) {
        res.status(404).json({ message: 'No game found with this id' });
        return;
      }
      res.json(dbGameData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new game
  Game.create({
    game_name: req.body.game_name,
    price: req.body.price,
    stock: req.body.stock,
    category_id: req.body.category_id
  })
    .then(dbGameData => res.json(dbGameData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a game by its `id` value
  Game.update({
      game_name: req.body.game_name,
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
    .then(dbGameData => {
      if (!dbGameData) {
        res.status(404).json({ message: 'No game found with this id' });
        return;
      }
      res.json(dbGameData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete a game by its `id` value
  Game.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbGameData => {
      if (!dbGameData) {
        res.status(404).json({ message: 'No game found with this id' });
        return;
      }
      res.json(dbGameData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
