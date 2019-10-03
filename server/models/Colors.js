const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let colorSchema = new Schema({
    name: {
        type: String,
        unique: [true, "El color ya estaba registrado"],
        required: [true, "El color es requerido"],
    },
    status: {
        type: Boolean,
        default: true
    },
    userId: {
        type: String,
        required: true
    },

}, {
    timestamps: true
});

module.exports = mongoose.model('Colors', colorSchema);