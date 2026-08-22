import mongoose from "mongoose";

const consultationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    subject: {
      type: String,
      required: true,
      trim: true,
    },

    consultationType: {
      type: String,
      required: true,
      enum: ["phone", "online", "in-person"],
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const Consultation =
  mongoose.models.Consultation ||
  mongoose.model("Consultation", consultationSchema);

export default Consultation;
