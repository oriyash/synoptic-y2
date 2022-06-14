export const adminPost = (req, res) => {
    const pword = req.body.pword.trim();

    if (pword === process.env.ADMIN) {
        return res.status(202).send("get in");
    } else {
        return res.status(400).send("get out");
    }
};
