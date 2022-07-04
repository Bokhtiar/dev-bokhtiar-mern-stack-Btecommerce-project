const orders = require('../../models/order.model')
const carts = require('../../models/cart.model')


/*list */
const list = async(req, res, next) => {
    try {
        const results = await orders.find()
                            .where('user_id', req.user.id)
        res.status(201).json({
            status: true,
            data : results
        })
    } catch (error) {
        console.log(error);
        next(error)
    }
}


/*order store done */
const store = async(req, res, next) => {
    try {
        const {
            name, email, phone, location, payment_number, payment_Type
        }=req.body

        const results = await carts.find()
                            .where('user_id', req.user.id)
                            .where('order_id', null)
        console.log(results)

        if(results.length ===0){
            res.status(201).json({
                status: true,
                message: "Cart Item Not Availabe...!"
            })
        }
        const newOrder = new orders({
            name,
            email,
            phone,
            location,
            payment_number,
            payment_Type,
            user_id: req.user.id,
        })
        if(newOrder){
            results.forEach(element => {
                element.order_id = newOrder._id
                element.save()
            });
        }
        await newOrder.save()
        res.status(201).json({
            status: true,
            message: "Order Successfully Done...!"
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports = {
    store,
    list
} 