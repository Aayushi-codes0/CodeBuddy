import app from "./src/app.js";

const PORT = 5001;

app.listen(PORT, "127.0.0.1", () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
