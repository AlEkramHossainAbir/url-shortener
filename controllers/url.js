const URL = require("./../models/url")
const { nanoid } = require("nanoid")

const handleGenerateNewShortUrl = async (req, res) => {
    const body = req.body;
    if (!body.url) {
        return res.status(400).json({ error: "url is required" });
    }

    const shortId = nanoid(8);

    const data = await URL.create({
        redirectUrl: body.url,
        shortId: shortId,
        visitedHistory: []
    });
    res.status(201).json({data: data, shortId:shortId});
}

module.exports = {
    handleGenerateNewShortUrl
}