class UserController {
    constructor(userModel) {
        this.userModel = userModel;
    }

    async registerUser(req, res) {
        const { username, password, fullName, gender, dateOfBirth, country } = req.body;

        try {
            const existingUser = await this.userModel.findOne({ username });
            if (existingUser) {
                return res.status(400).json({ message: 'Username already exists' });
            }

            const newUser = new this.userModel({
                username,
                password, // Note: Password should be hashed before saving
                fullName,
                gender,
                dateOfBirth,
                country
            });

            await newUser.save();
            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error registering user', error });
        }
    }

    async loginUser(req, res) {
        const { username, password } = req.body;

        try {
            const user = await this.userModel.findOne({ username });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            // Note: Compare hashed password here
            if (user.password !== password) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            // Generate JWT token
            const token = this.generateToken(user._id);
            res.status(200).json({ token, user: { username: user.username, fullName: user.fullName } });
        } catch (error) {
            res.status(500).json({ message: 'Error logging in', error });
        }
    }

    async searchUser(req, res) {
        const { username } = req.query;

        try {
            const user = await this.userModel.findOne({ username });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.status(200).json({ user });
        } catch (error) {
            res.status(500).json({ message: 'Error searching user', error });
        }
    }

    generateToken(userId) {
        const jwt = require('jsonwebtoken');
        const secretKey = process.env.JWT_SECRET;
        return jwt.sign({ id: userId }, secretKey, { expiresIn: '1h' });
    }
}

module.exports = UserController;