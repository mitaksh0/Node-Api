// handler : managing incoming req and communicate between data and response

function getAllUsers(req, res){
    res.send("All users")
}

module.exports = {getAllUsers}