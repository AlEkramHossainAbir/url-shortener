const express = require("express");

const app = express();
const { ConnectToMongoDb } = require("./connect");
const urlRoute = require("./routes/url");
const URL = require("./models/url");

const PORT = process.env.PORT || 3000;

ConnectToMongoDb({ url: "mongodb://127.0.0.1:27017/urlShortner" })
  .then(() => console.log("Database connected"))
  .catch((err) => {
    console.error("Failed to connect to the database:", err);
    process.exit(1); // Exit the process if the database connection fails
  });

app.use(express.json());

app.use("/url", urlRoute);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const result = await URL.findOneAndUpdate(
    { shortId: shortId },
    {
      $push: {
        visitedHistory: {
          timestamps: Date.now(),
        },
      },
    }
  );
  console.log(result.redirectUrl);

  res.redirect(result.redirectUrl);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
