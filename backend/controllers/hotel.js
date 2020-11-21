const Hotel = require('../models/hotel.model.js');

exports.browse = (req, res) => {
  Hotel.find({ }, function(err, hotels) {
    res.json(hotels);
  });
}

exports.byId = (req, res) => {
  let { id }= req.params;
  Hotel.findById(id, function(err, hotel) {
    res.json(hotel);
  });
}
