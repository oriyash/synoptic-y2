import Report from "../models/Report.js";

export const reportPost = async (req, res) => {
    try {
        console.log(req.body);
        const filename = req.file.filename;

        const newReport = new Report({
            lat: req.body.lat,
            lng: req.body.lng,
            desc: req.body.desc,
            file: filename,
        });

        const report = await newReport.save();
        return res.status(201).json(report);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Server Error");
    }
};
