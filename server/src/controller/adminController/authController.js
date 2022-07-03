const admins = require("../../models/admin.model");

/*admin list*/
const list = async (req, res, next) => {
  try {
    const results = await admins.find();
    res.status(201).json({
      status: true,
      data: results,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

/*login*/
const login = async (req, res, next) => {
  res.status(201).json({
    status: true,
    message: "done",
  });
};

/*Register*/
const register = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body

    const existEmail = await admins.findOne({ email })
    if (existEmail) {
      res.status(403).json({
        status: true,
        message: "Email Already Exist...!"
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
};
