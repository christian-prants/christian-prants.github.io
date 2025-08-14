export default function Win98Modal({ title, children, onClose }) {
  return (
    <div className="win98-window">
      <div className="title-bar">
        <span>{title}</span>
        <button onClick={onClose}>✕</button>
      </div>
      <div className="window-content">{children}</div>
    </div>
  );
}
