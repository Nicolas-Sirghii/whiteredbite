import { useState } from "react";
import { learnJson } from "../../../data/learn_options_json";
import "./learning_options.css";

export function LearningOptions() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(learnJson[0]);

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
  };

  return (
    <div className="stack-wrapper">
      <div className="stack-selected" onClick={() => setOpen(!open)}>
        {selected.name}
      </div>

      <div className="stack">
        {learnJson.map((option, i) => {
          const offset = i * 130; // spacing between circles

          return (
            <div
              key={i}
              className={`stack-item ${open ? "open" : ""}`}
              onClick={() => handleSelect(option)}
              style={{
                transform: open
                  ? `translateX(-50%) translateY(${offset}px)`
                  : `translateX(-50%) translateY(-10px) scale(0.95)`,
                zIndex: learnJson.length - i,
                transitionDelay: `${i * 40}ms`,
              }}
            >
              {option.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}