const carts = require('../../models/cart.model')


/*cart list */

const list = async(req, res, next) => {
    try {
        const results = await carts.find()
                            .where('user_id', req.user.id)
                            .where('order_id', null)
                            .limit(5)
        
        res.status(200).json({
            status:true,
            data:results
        })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

/*store cart */
const store = async(req, res, next) => {
    try {
        const { id } = req.params;
        const newCart = new carts({
            product_id: id,
            user_id : req.user.id,
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

/*destroy */
const destroy = async(req, res, next) => {
    try {
        const { id } = req.params
         await carts.findByIdAndDelete(id);
        res.status(200).json({
            status: true,
            message : "Cart Item Deleted...!"
        })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

module.exports = {
    store,
    list,
    destroy
}