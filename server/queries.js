var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var connectionString = process.env.WALMARTSURVEY_CONNECTIONSTRING;

var pgp = require('pg-promise')(options);
var db = pgp(connectionString);

// add query functions

module.exports = {
  saveBlob: saveBlob,
  checkEmail: checkEmail
};

function saveBlob(req, res, next) {
  db.none('INSERT INTO blobs (blob) VALUES ($1)', JSON.stringify(req.body))
    .then(function(){
      res.status(200)
      .json({status: 'success', message: 'we did it!'});
    })
    .catch(function(err){
        return next(err);
    });
}

function checkEmail(req, res, next) {
  var email = req.params.email;
  db.one("SELECT * FROM users WHERE email = $1", email)
    .then(function(data){
      res.status(200)
      .json({status: 'success', data: data, message: 'we did it!'});
    })
    .catch(function(err){
        return next(err);
    });
}
