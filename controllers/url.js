const URL = require("./../models/url")
const { nanoid } = require("nanoid")

const handleGenerateNewShortUrl = async (req, res) => {
    const body = req.body;
    if (!body.url) {
        return res.status(400).json({ error: "url is required" });
    }

    console.log(req.body)

    const shortId = nanoid(8);

    const data = await URL.create({
        redirectUrl: body.url,
        shortId: shortId,
        visitHistory: []
    });
    res.status(201).json({data: data, shortId:shortId});
}

const handleGetAnalytics = async (req, res) => {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId: shortId });
    console.log(result)
    
    res.json({ data: result.visitHistory, totalClicks: result.visitHistory.length });
}
module.exports = {
    handleGenerateNewShortUrl,
    handleGetAnalytics
}