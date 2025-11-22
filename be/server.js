const express = require("express");
const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from backend!" });
});

app.listen(3000, () => console.log("BE running on port 3000"));
