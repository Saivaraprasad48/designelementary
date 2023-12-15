import mongoose from "mongoose";
const schema = mongoose.Schema;

const recurringDays = [2, 3, 5, 7];
const subjects = ["work", "personal", "home"];

const remainderSchema = new schema(
  {
    date: {
      type: Date,
      require: true,
    },
    subject: {
      type: String,
      enum: subjects,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    contact_number: {
      type: String,
      require: true,
    },
    sms: {
      type: String,
      require: true,
    },
    recurring: {
      type: String,
      enum: recurringDays,
      require: true,
    },
  },
  {
    collection: "remainders",
  }
);

const remainderModel = mongoose.model("remainders", remainderSchema);

export default remainderModel;
