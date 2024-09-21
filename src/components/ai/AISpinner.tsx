import './AISpinnerAnimation.css'

export default function AISpinner() {
  return (
    <div className="base">
      {Array.from({ length: 15 }).map((_, i) => (
        <div key={i} className={`circ circ-${i + 1}`}></div>
      ))}
    </div>
  );
}
