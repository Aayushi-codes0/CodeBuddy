import { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import ReviewPanel from "./components/ReviewPanel";
import "./App.css";

export default function App() {
  const [code, setCode] = useState("");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  const reviewCode = async () => {
    if (!code.trim()) return;
    setLoading(true);
    setReview("");

    try {
      const res = await fetch("http://localhost:5001/api/ai/getreview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      const data = await res.json();
      setReview(data.review || "No review generated.");
    } catch {
      setReview("❌ Failed to fetch review.");
    }

    setLoading(false);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>CodeBuddy</h1>
        <p>"Your Apna Offline AI Code Reviewer"</p>
      </header>
  <button className="review-btn" onClick={reviewCode} disabled={loading}>
        {loading ? "Reviewing..." : "Review Code"}
      </button>
      <div className="panels">
        <CodeEditor code={code} setCode={setCode} />
        <ReviewPanel text={review} loading={loading} />
      </div>
      
        <footer className="footer">
       <span>
          Presented by <b>Aayushi Shah Jain</b> | contact: aayushishahjain01@gmail.com 
        </span> 
        </footer>
  
    
    </div>

  );
  
}
