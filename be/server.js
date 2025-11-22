const express = require("express");
const app = express();

app.get("/api/hello", (req, res) => {
    res.json({ message: "Xin chào từ backend!", time: new Date() });
});

app.listen(3000, () => console.log("Backend chạy ở port 3000"));
