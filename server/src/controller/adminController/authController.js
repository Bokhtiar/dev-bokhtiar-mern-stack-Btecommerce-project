const admins = require('../../models/admin.model')

/*login*/
const login = async(req, res, next) => {
    res.status(200).json({
        status: true,
        message: 'done'
    })
}

module.exports ={
    login
}