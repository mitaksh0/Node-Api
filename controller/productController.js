// handler : managing incoming req and communicate between data and response

function getAllProducts(req, res){
    res.send("All products")
}

module.exports = {getAllProducts}