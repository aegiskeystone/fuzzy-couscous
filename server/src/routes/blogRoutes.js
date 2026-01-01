import express from 'express';

const router = express.Router()

router.get("/health", (req, res) => {
    res.json({message: "Aegis Blog API is Healthy"});
});

export default router;