var db = require('../db');

var nannyApplication = {
    getparents: function(callback)
    {
        return db.query('SELECT * from parent_info', callback);
    },
    createskills: function (nannyApplication, callback) {
        return db.query('Insert into skills(nanny_username,cpr,can_cook,pet_friendly,can_drive) values(?, ?, ?, ?, ?)',[nannyApplication.nanny_username,nannyApplication.cpr,nannyApplication.can_cook,nannyApplication.pet_friendly,nannyApplication.can_drive], callback);
    } 
}

module.exports = nannyApplication;