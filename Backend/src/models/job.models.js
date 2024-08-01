import mongoose, { Schema } from "mongoose";

const jobSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    position: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    jobLocation: {
      type: String,
      required: true
    },
    jobStatus: {
      type: String,
      enum: ['pending', 'interview', 'decline'],
      required: true
    },
    jobType: {
      type: String,
      enum: ['full time', 'part time', 'internship'],
      required: true
    }
  },
  {
    timestamps: true
  }
);

export const Job = mongoose.model("Job", jobSchema);
