const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(
    JSON.stringify({
      success: true,
      message: "Hello World"
    })
  );
});

app.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}`);
  
})