const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  UserName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  UserEmail: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 255,
    unique: true
  },
  UserPassword: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1024

  },
  Photo : {
    type:String
  },
  FollowingAuthorId:{
    type:"array",
    "items":{
      type:Number
    }
  },
  FollowingUserId:{
    type:"array",
    "items":{
      type:Number
    }
  },
  FollowersUserId:{
    type:"array",
    "items":{
      type:Number
    }
  },
  OwnedBookId:{
    type:"array",
    "items":{
      type:Number
    }
  },
  ShelfId:{
    type:"array",
    "items":{
      type:Number
    }
  },
  Confirmed:{
    type:Boolean,
    default: false
  },
  UserId:{
    type: String,
    unique: true
  }
  });

UserSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id }, 'jwtPrivateKey');
  return token;
}
const User = mongoose.model('User', UserSchema);
function validateUser(User) {
const schema = {
UserName: Joi.string().min(3).max(50).required(),
UserEmail: Joi.string().min(6).max(255).required().email(),
UserPassword: Joi.string().min(6).max(255).required()
};
return Joi.validate(User, schema);
}
exports.User = User;
exports.validate= validateUser;