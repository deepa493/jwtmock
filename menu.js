var mongoose=require('mongoose');


var menuSchema= mongoose.Schema({
           name:{
                 type:String,
                 required:true 
                },
          description:{
                 type:String

                     },
           cost:{ 
                 type:Number

                 }
          
            

})

const Menu = module.exports = mongoose.model('menu', menuSchema);


module.exports.addMenu = (genre, callback) => {
	Menu.create(genre, callback);
}


module.exports.getMenus = function(callback, limit) {
	Menu.find(callback).limit(limit);
}


//const Menu=mongoose.model('menu',menuSchema);
//module.exports=Menu;

//module.exports.getMenu=function(callback,limit){
// Menu.find(callback).limit(limit);
//Menu.find(callback);
//return callback("hai",Menu.find());
