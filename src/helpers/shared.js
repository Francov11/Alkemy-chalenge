//Token authentication 
const isAuthenticated = async (req, res, next) => {
    try {
        const bearerHeader = req.headers.authorization;
        console.log(bearerHeader);
        if(typeof bearerHeader !== 'undefined'){
                const bearer = bearerHeader.split(" ");
                const bearerToken = bearer[1];
                req.token = bearerToken
                jwt.verify(req.token, process.env.SECRET_KEY, (err, data) => {
                    if(err){
                        console.log(err);
                        res.sendStatus(403)
                    } else {
                        console.log(data);
                        req.data = data
                        next();
                    }
                });
            }
    }
    catch (err) {
        http.Error(req, res, err)
    }   
}

module.exports = {
    isAuthenticated
}