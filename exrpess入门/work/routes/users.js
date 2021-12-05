var express = require('express');
var router = express.Router();


class user {
  id
  name
  password
  email
  constructor(id,name,password,email) {
  }
}
const users = []
router.get('/', function(req, res, next) {
  res.send(users.find((item)=>{return item.id = req.params.id}))
});
router.post('/', function(req, res, next) {

});
module.exports = router;
