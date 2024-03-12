const express = require("express");
const axios = require("axios");
const cors = require("cors"); // Add cors for proxying
const fs = require("fs");

const app = express();
app.use(cors()); // Enable cors middleware

app.get("/github-download", async (req, res) => {
  const repoName = req.query.repoName;
  const username = "abuanwar072";

  try {
    const response = await axios.get(
      `https://api.github.com/repos/${username}/${repoName}/zipball`,
      {
        "access-control-allow-origin": "*",
      }
    );
    console.log("Downloaded repo:", response);

    res.send(response.data);
  } catch (error) {
    console.error("Error downloading repo:", error);
    res.status(500).send("Error downloading repo");
  }
});

app.get("/", async (req, res) => {
  res.send("Hello World");
});

app.listen(3001, () => console.log("Server listening on port 3001"));
