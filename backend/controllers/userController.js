const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "1d" });
};

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);

    // create token to login
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//SignUp User
const signUpUser = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  // let emptyFields = [];

  // if (!first_name) {
  //   emptyFields.push("date");
  // }
  // if (!last_name) {
  //   emptyFields.push("date");
  // }
  // if (!email) {
  //   emptyFields.push("date");
  // }
  // if (!password) {
  //   emptyFields.push("date");
  // }
  // if (!confirm_password) {
  //   emptyFields.push("date");
  // }
  // if (!isAgree) {
  //   emptyFields.push("date");
  // }

  // if (emptyFields.length > 0) {
  //   return res
  //     .status(400)
  //     .json({ error: "Please fill all the required fields", emptyFields });
  // }

  try {
    const user = await User.signup(first_name, last_name, email, password);

    // create token to directly login
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, signUpUser };
