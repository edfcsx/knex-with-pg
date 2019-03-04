const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

function isValidId(req, res, next) {
  // eslint-disable-next-line no-restricted-globals
  if (!isNaN(req.params.id)) return next();
  return next(new Error('invalid id'));
}

function validSticker(sticker) {
  const hasTitle = typeof sticker.title === 'string' && sticker.title.trim() !== '';
  const hasUrl = typeof sticker.url === 'string' && sticker.url.trim() !== '';
  const hasDescription = typeof sticker.description === 'string' && sticker.description.trim() !== '';
  // eslint-disable-next-line no-restricted-globals
  const hasRating = !isNaN(sticker.rating);
  return hasTitle && hasUrl && hasDescription && hasRating;
}

router.get('/', (req, res) => {
  queries.getAll()
    .then(stickers => res.json(stickers));
});

router.get('/:id', isValidId, async (req, res, next) => {
  const sticker = await queries.getOne(req.params.id);
  if (sticker.length) return res.json(sticker);
  return next();
});

router.post('/', (req, res, next) => {
  if (validSticker(req.body)) {
    return queries.create(req.body)
      .then(stickers => res.json(stickers[0]));
  }
  return next(new Error('invalid sticker'));
});

router.put('/:id', isValidId, (req, res, next) => {
  if (validSticker(req.body)) {
    return queries.update(req.params.id, req.body).then(stickers => res.json(stickers[0]));
  }
  return next(new Error('invalid sticker'));
});

router.delete('/:id', isValidId, (req, res) => {
  queries.delete(req.params.id)
    .then(() => {
      res.json({
        deleted: true,
      });
    });
});

module.exports = router;
