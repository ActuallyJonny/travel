const Hotel = require('../models/hotel.model.js');

exports.browse = (req, res) => {
  Hotel.find({ }, function(err, hotels) {
    res.json(hotels);
  });
}

exports.byId = (req, res) => {
  let { id } = req.params;
  Hotel.findById(id, function(err, hotel) {
    res.json(hotel);
  });
}

exports.rooms = (req, res) => {
  let { id } = req.params;
  Hotel.findById(id, 'rooms', function(err, hotel) {
    res.json(hotel);
  });
}

exports.card = (req, res) => {
  let { id } = req.params;
  Hotel.findById(id, 'name location.city desc rooms.price').sort('rooms.price').slice('rooms', 1).exec(function(err,cardData) {
    res.json(cardData);
  });
}
