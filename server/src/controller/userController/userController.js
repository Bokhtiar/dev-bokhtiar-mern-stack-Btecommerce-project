const users = require("../../models/users.model");
const jwt = require('jsonwebtoken')

/* Login */
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const account = await users.findOne({email})
    if(!account){
        res.status(404).json({
            status: true,
            message: "Invalid Email || Password"
        })
    }
    /* Password Check */
    const existPassword = await users.findOne({ password });
    if (!existPassword) {
      res.status(404).json({
        status: true,
        message: "Email or Password Invalid...!",
      });
    }

    /* Generate JWT token */
    const token = await jwt.sign(
      {
        id: account._id,
        name: account.name,
        role: account.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      status: true,
      data: token,
      message: "User Login Successfully Done...!",
    });



  } catch (error) {
    console.log(error);
    next(error);
  }
};

/* register */
const register = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    const existUser = await users.findOne({ email });
    if (existUser) {
      res.status(404).json({
        status: false,
        message: "Email Already Exists...!",
      });
    }
    const newUser = new users({
      name,
      email,
      password,
      role,
    });
    await newUser.save();
    res.status(201).json({
      status: true,
      message: "User Registration Successfully...!",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  login,
  register,
};
