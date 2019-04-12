const orm = require('../config/orm');

//create the code that will call the ORM functions using burger specific input for the ORM.
//export burger module into controllers/burger_controllers.js
module.exports = burger = {
    all: function(callback) {
        orm.all('left_burgers', function(results) {
            callback(results);
        });
    },
    create: function(name, callback) {
        orm.create('right_burgers',
         ['burger_name', 'devoured'],
         [name, false], callback);
    },
    update: function(id, callback) {
        let condition = `id=${id}`;
        orm.update('burgers', {devoured: true}, condition, callback);
    }
};