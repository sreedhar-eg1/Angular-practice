const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();

const upload = multer({ dest: "uploads/" });

app.use(cors());

app.post("/api/upload", upload.single('file'), (req, res) => {
  res.status(200).send({ message: "File uploaded successfully" });
});

app.listen(3000, () => console.log('Server running in localhost:3000'))