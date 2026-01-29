import aiService from "../services/ai.service.js";

export async function getReview(req, res) {
  try {
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({ error: "Code is required" });
    }

    const review = await aiService(code);
    res.json({ review });

  } catch (err) {
    console.error("AI ERROR:", err);
    res.status(500).json({ error: "AI review failed" });
  }
}
