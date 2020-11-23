const User = require('../models/user.model.js');

exports.byId = (req, res) => {
  let { userId } = req.params;
  User.findById(userId, function(err, user) {
    res.json(user);
  });
}

exports.bookings = (req, res) => {
  let { userId } = req.params;
  User.findById(userId, 'bookings').populate('bookings').exec(function(err, bookings) {
    if (err) {res.status(500).json({ error: err })}
    if (bookings) {res.json(bookings)}
  });
}
