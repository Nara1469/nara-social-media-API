const { Schema, Types } = require('mongoose');
const { formatDate } = require('./../utils/helper');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
      max_length: 50,
    },
    userId: {
      type: String,
      required: true,
      max_length: 50,
    },
    createdAt: {
      type: String,
      default: formatDate(Date.now),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
