const express = require('express');
const router = express.Router({ mergeParams: true });

const Campground = require('../modules/campground.js');
const Review = require('../modules/review.js');
const reviews = require('../controllers/reviews.js');
const { reviewSchema } = require('../schemas.js')
const ExpressError = require('../utils/ExpressError.js')
const catchAsync = require('../utils/catchAsync.js');
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware.js');
const { createReview } = require('../controllers/reviews.js');


router.post('/', validateReview, isLoggedIn, catchAsync (reviews.createReview));

router.delete('/:reviewId', isLoggedIn, isReviewAuthor,  catchAsync(reviews.deleteReview));
module.exports = router;

