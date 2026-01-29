function formatReview(text) {
  if (!text) return [];

  const sections = [
    "Detected Language",
    "Issues Found",
    "Improvements",
    "Optimized Version",
    "Final Verdict",
  ];

  let result = [];
  let currentTitle = "";
  let buffer = [];

  text.split("\n").forEach((line) => {
    const match = sections.find((s) => line.startsWith(s));
    if (match) {
      if (currentTitle) {
        result.push({ title: currentTitle, content: buffer.join("\n") });
      }
      currentTitle = match;
      buffer = [];
    } else {
      buffer.push(line);
    }
  });

  if (currentTitle) {
    result.push({ title: currentTitle, content: buffer.join("\n") });
  }

  return result;
}

export default function ReviewPanel({ text, loading }) {
  const sections = formatReview(text);

  if (loading) {
    return <div className="panel">Reviewing code…</div>;
  }

  if (!text) {
    return <div className="panel">AI review will appear here.</div>;
  }

  return (
    <div className="panel">
      {sections.map((sec, idx) => (
        <div key={idx} className="review-section">
          <h3>{sec.title}</h3>
          <pre>{sec.content}</pre>
        </div>
      ))}
    </div>
  );
}
