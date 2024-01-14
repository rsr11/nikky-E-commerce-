const jwt = require('jsonwebtoken');
const jwt_Sign= "G4X4T4#DW";

const fetchUser = (req, res, next)=>{

//    get the user from the jwt token and add id  to req object
        const token = req.header("auth-token");
        if(!token){
            res.status(401).send({error:"Plz authenticate using valid token" })
        }
        try {
            const data = jwt.verify(token, jwt_Sign);
            req.user = data.user;  
            next();
            
        } catch (error) {
            res.status(401).send({error:"Plz authenticate using valid token" })  
        }
}

module.exports =fetchUser;