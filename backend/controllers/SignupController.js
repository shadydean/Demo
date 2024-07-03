const bcrypt = require('bcrypt');
const User = require('../models/user.model');

const saveUser = async (req, res) => {
    const { email, password, mobilenumber, role } = req.body;

    // Validate request body
    if (!email || !password || !mobilenumber) {
        return res.status(400).send({ message: 'Please fill all the required fields' });
    }

    try {
        // Check if user already exists
        let user = await User.findOne({ email });

        if (user) {
            console.log(`User with email ${email} already exists`);
            return res.status(409).send({ message: "User already exists" });
        }

        // Create new user instance
        user = new User({ email, password, mobilenumber, role, active: false });

        // Hash password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Save user to database
        await user.save();

        console.log(`User with email ${email} created successfully`);
        res.status(201).send({ message: "User created successfully" });

    } catch (err) {
        console.error(`Error creating user: ${err.message}`);
        res.status(500).send({ message: `Error creating user: ${err.message}` });
    }
};

module.exports = { saveUser };
