import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
    {
        lat: Number,
        lng: Number,
        desc: String,
        file: String,
    },
    { timestamps: true }
);

export default mongoose.model("Reports", reportSchema);
