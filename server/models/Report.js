import mongoose, { Schema } from "mongoose";

const reportSchema = new Schema({
    location: {
        type: [Number],
        required: true,
    },
    time: new Date(),
});

export default mongoose.model("Reports", reportSchema);
