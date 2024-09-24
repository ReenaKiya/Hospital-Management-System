import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({

  firstName: {
    type: String,
    required: true,
    minLength: [3, "First Name must Contain At least 3 characters! "]
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last Name must Contain At least 3 characters! "]
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please Provide a valid Email!"]
  },
  phone: {
    type: String,
    required: true,
    minLength: [11, "Phone Number Must Contain Exact 11 Digits!"],
    maxLength: [11, "Phone Number Must Contain Exact 11 Digits!"],
  },
  message: {
    type: String,
    required: true,
    minLength: [10, "Message Must Contain At Least 10 Characters!"],
  },

});

export const Message = mongoose.model("Message", messageSchema)