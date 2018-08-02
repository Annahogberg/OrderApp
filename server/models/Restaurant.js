// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const restaurantSchema = new Schema(
//   {
//     username: { type: String, required: true, unique: true, trim: true },
//     password: { type: String, required: true, trim: true },
//     email: { type: String, required: true, match: /\S+@\S+\.\S+/, trim: true },
//     name: { type: String, required: true, trim: true },
//     phone: { type: Number, required: true, match: /^[0-9\-]+$/i, trim: true },
//     address: {type: String, required: true},
//     CIF: String,
//     // bankDetails: {
//     //   IBAN: {type: String, maxlength: 34},
//     //   BIC: {type: String}
//     // },
//     tables: {type: Number},
//     type: {type: String, enum: ['Mediterranean', 'Italian', 'Spanish', 'Japanese', 'Chinese', 'Mexican', 'Asian', 'Fast Food', 'American', 'Lebanese', 'Vegetarian']},
//     menu: {type: Schema.Types.ObjectId, ref: 'Menu'}, //, required: true
//     openinghours: {type: Schema.Types.ObjectId, ref:'openingHours'}, //, required: true
//     reservations: { type: Schema.Types.ObjectId, ref: "Reservation" }
//   },
//   { timestamps: true }
// );

// const Restaurant = mongoose.model("Restaurant", restaurantSchema);
// module.exports = Restaurant;

