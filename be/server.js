const express = require("express");
const cors = require("cors");
const app = express();

// Bật CORS cho mọi domain
app.use(cors());

app.get("/api/hello", (req, res) => {
    res.json({ message: "Xin chào từ backend!", time: new Date() });
});

app.listen(3000, "0.0.0.0", () => console.log("Backend chạy ở port 3000"));

