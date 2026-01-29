import "./CodeEditor.css";
export default function CodeEditor({ code, setCode }) {
  return (
    <textarea
      className="editor"
      placeholder="Paste your code here..."
      value={code}
      onChange={(e) => setCode(e.target.value)}
      spellCheck="false"
    />
  );
}
