var mongoose = require('mongoose');

var OrderSchema = mongoose.Schema({
  total: Number,
  restaurantId: String,
  deliveryId: {type: mongoose.Schema.Types.ObjectId, ref:'AddressModel'},
  items: [{type: mongoose.Schema.Types.ObjectId, ref:'OrderItemModel'}],
  deliveryCharge: Number,
  customerId: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  driverId: {type: mongoose.Schema.Types.ObjectId, ref:'UserModel'},
  chefId: {type: mongoose.Schema.Types.ObjectId, ref:'UserModel'},
  state: {type: String, enum:['cart','paid','accepted','ready','delivered','cancelled']},
  subTotal: Number,
  dateCreated: {type: Date,default: Date.now()},
  minOrderLimit: Number,
  tax: Number
}, { collection: 'order' });

module.exports = OrderSchema;
