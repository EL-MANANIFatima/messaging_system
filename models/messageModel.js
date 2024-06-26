const { Schema, model, Types } = require('mongoose');

const messageSchema = new Schema({
    senderId: {
        type: Types.ObjectId,
        required: true
    },
    receiverId: {
        type: Types.ObjectId,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "sent"
    }
});

module.exports = model('message', messageSchema);
