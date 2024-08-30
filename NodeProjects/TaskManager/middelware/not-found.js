const notFound = (req, res) =>{
    res.status(404).json({message: "Not found the route"})
}

module.exports = notFound