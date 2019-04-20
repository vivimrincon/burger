const orm = require('../config/orm');

//create the code that will call the ORM functions using burger specific input for the ORM.
//export burger module into controllers/burger_controllers.js
module.exports = burger = {
    all: function(callback) {
                //'table', cb
        orm.all('left_burgers', function(results) {
            callback(results);
        });
    },
    create: function(name, callback) {
        //table, cols, vals, cb
        orm.create('left_burgers', ['BurgerName', 'Devoured'],
         [name, false], callback);
    },
    update: function(id, callback) {
        let condition = `BurgersID=${id}`;
        //table, objColVals, condition, cb
        orm.update('left_burgers', {Devoured: true}, condition, callback);
    }
};