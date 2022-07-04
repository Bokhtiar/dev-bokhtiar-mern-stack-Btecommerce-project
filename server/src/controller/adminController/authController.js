const admins = require("../../models/admin.model");
const jwt = require('jsonwebtoken')
/*admin list*/
const list = async (req, res, next) => {
  try {
    const results = await admins.find();
    res.status(201).json({
      status: true,
      data: results
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

/*login*/
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    /*email check */
    const account = await admins.findOne({ email });
    if (!account) {
      res.status(404).json({
        status: true,
        message: "Email or Password Invalid...!",
      });
    }

    /* Password Check */
    const existPassword = await admins.findOne({ password });
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
      message: "Login Successfully Done...!",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

/*Register*/
const register = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    const existEmail = await admins.findOne({ email });
    if (existEmail) {
      res.status(403).json({
        status: true,
        message: "Email Already Exist...!",
      });
    }

    const newAdmin = new admins({
      name,
      email,
      password,
      role,
    });
    await newAdmin.save();

    res.status(201).json({
      status: true,
      message: "Admin Register Successfully...!",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  login,
  register,
  list
};
