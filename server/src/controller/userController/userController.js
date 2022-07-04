const users = require("../../models/users.model");

/*register */
const register = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    const existUser = await users.findOne({email})
    if(existUser){
        res.status(404).json({
            status: false,
            message: "Email Already Exists...!"
        })
    }
    const newUser = new users({
      name,
      email,
      password,
      role,
    })
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
  register,
};
