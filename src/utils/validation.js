const { body, validationResult } = require('express-validator');

const validateRegistration = [
    body('username').isString().notEmpty().withMessage('Username is required'),
    body('password').isString().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('fullName').isString().notEmpty().withMessage('Full name is required'),
    body('gender').isIn(['male', 'female', 'other']).withMessage('Gender must be male, female, or other'),
    body('dateOfBirth').isDate().withMessage('Date of birth must be a valid date'),
    body('country').isString().notEmpty().withMessage('Country is required'),
];

const validateLogin = [
    body('username').isString().notEmpty().withMessage('Username is required'),
    body('password').isString().notEmpty().withMessage('Password is required'),
];

const validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = {
    validateRegistration,
    validateLogin,
    validateRequest,
};