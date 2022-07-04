const products = require("../../models/products.model")
const {FileUpload, Host} = require("../../helplers/index")

/*list */
const list = async(req, res, next) => {
    try {
        const item = []
        const results = await products.find()
        if(results && results.length > 0){
            for (let i = 0; i < results.length; i++) {
                const element = results[i];
                item.push({
                    _id : element._id,
                    name: element.name,
                    image: element.image ? Host(req) + "uploads/product/" + element.image: null,
                    category_id: element.category_id,
                    price: element.price,
                    description: element.description,
                    product_status : element.product_status
                })
            }
        }

        res.status(200).json({
            status:true,
            data: item
        })
        
    } catch (error) {
        console.log(error)
        next(error)
    }
}


/*store */
const store = async(req, res, next) => {
    try {
        const {name, price, category_id, description}=req.body
        const image = req.files.image

        const uploadFile = await FileUpload(image, "./uploads/product/");
        if (!uploadFile) {
          return res.status(501).json({
            status: false,
            message: "Failed to upload image",
          });
        }

        const newProduct = new products ({
            name,
            price,
            category_id,
            description,
            image: uploadFile
        })
        await newProduct.save()
        res.status(201).json({
            status:true,
            message: "Product Create Successfully...!"
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}


/*show */
const show = async(req, res, next) => {
    try {
        
    } catch (error) {
        console.log(error)
        next(error)
    }
}


/*update */
const update = async(req, res, next) => {
    try {
        
    } catch (error) {
        console.log(error)
        next(error)
    }
}



/*destroy */
const destroy = async(req, res, next) => {
    try {
        
    } catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports = {
    list,
    store,
    show,
    update,
    destroy
}