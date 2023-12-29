const express = require('express');
// set this parameter to the router to access the params fron req
// when we are assigning the path to the router in app.js
const router = express.Router({ mergeParams: true });
const catchAsync = require('../utils/catchAsync');
const reviews = require('../controllers/review')
const{validateReview, isLoggedIn, isReviewAuthor} = require('../middleware');


router.post('/', isLoggedIn, catchAsync(reviews.createReview))

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview))

module.exports = router;