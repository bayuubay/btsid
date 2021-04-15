const UserController=require('./user')
const AuthController=require('./auth')
const ShoppingController=require('./shopping')
class Controller{
    auth(){
        return AuthController
    }
    user(){
        return UserController
    }
    shopping(){
        return ShoppingController
    }
}

module.exports=Object.freeze(new Controller())