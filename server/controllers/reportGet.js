import Report from "../models/Report.js";

export const getAllReports = (req, res) => {
    try {
        const reports = Report.find();
        return res.status(200).json(reports);
    } catch (error) {
        return res.status(500).send("No reports in database rn");
    }
};
