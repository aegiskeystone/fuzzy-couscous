import express from 'express';

const app = express();

app.get("/health", (req, res) => {
    res.json({message: "Server is healthy"});
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on  http://localhost:${PORT}`);
});