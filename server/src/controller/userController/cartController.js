const carts = require('../../models/cart.model')


/*cart list */

/*store cart */
const store = async(req, res, next) => {
    try {
        const { id } = req.params;
        const {user_id} = req.user.id
        const newCart = new carts({
            product_id: id,
            user_id : user_id,
        })
        await newCart.save()
        res.status(201).json({
            status: true,
            message: "Cart Added Successfully...!"
        })
    } catch (error) {
        console.log(error); 
    }
}
module.exports = {
    store
}