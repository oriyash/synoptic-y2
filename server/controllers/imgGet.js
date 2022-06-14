import Report from "../models/Report.js";

export const imgGet = async (req, res) => {
    try {
        const report = await Report.findById(req.params.id);
        const filename = report.file;

        if (filename) {
            return res
                .status(200)
                .sendFile(`${filename}`, { root: "../pictures" });
        } else {
            return res.status(404).send("Image not found");
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("Server Error");
    }
};
