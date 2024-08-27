const getAllProductStatic = async (req, res) =>{
    res.status(200).json({msg:'static products'})
}

const getAllProducts = async (req, res) =>{
    res.status(200).json({msg:'get all products'})
}


module.exports = {
    getAllProductStatic,
    getAllProducts
}