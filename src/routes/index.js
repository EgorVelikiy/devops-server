const express = require('express')
const { uploadImage, getImage } = require('../controllers/ImageController')
const CardController = require('../controllers/CardController')
const router = express.Router()

router.get('/gallery', CardController.getGallery);
router.get('/gallery/:id', CardController.getCard);
router.post('/gallery', CardController.createCard);
router.patch('/gallery/:id', CardController.udpateCard);

router.post('/image-upload', uploadImage);
router.get('/images/:id', getImage);
router.delete('/gallery/:id', CardController.deleteCard); 


module.exports = router