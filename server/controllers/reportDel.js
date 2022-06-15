import Report from "../models/Report.js";

export const reportDel = async (req, res) => {
    const id = req.params.id;
    try {
        const reportCheck = await Report.findById(id);

        if (reportCheck) {
            try {
                const deletedUser = await Report.findByIdAndDelete(id);
                return res.status(200).json(deletedUser);
            } catch (error) {
                console.log(error);
            }
        } else {
            return res.status(404).json("this fire doesnt exist refresh page");
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json("server error");
    }
};
