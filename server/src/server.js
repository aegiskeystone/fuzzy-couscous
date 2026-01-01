import express from 'express';
import { config } from 'dotenv';
import blogRoutes from './routes/blogRoutes.js'; // Import Routes


config();

const app = express();
app.use("/blog", blogRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on  http://localhost:${PORT}`);
});

process.on("SIGINT", async () => {
    process.exit(0)
});