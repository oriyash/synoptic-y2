import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
    {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
        desc: { type: String, required: true },
        file: { type: String, required: true },
    },
    { timestamps: true }
);

export default mongoose.model("Reports", reportSchema);
