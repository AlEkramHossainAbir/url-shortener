const URL = require("./../model/url")
const nanoid = require("nanoid")

const handleGenerateShortUrl = async (req, res) => {
    const body = req.body;
    if (!body.url) {
        return res.status(400).json({ msg: "URL is required" });
    }

    const data = await URL.create({
        redirectUrl: body.url,
        shortId: nanoid.generate(8)
    });
    res.status(201).json(data);
}

module.exports = {
    handleGenerateShortUrl
}