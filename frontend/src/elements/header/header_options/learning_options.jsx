import { useState } from "react";
import { learnOptionsJson } from "../../../data/learn_options_json";
import "./learning_options.css";

export function LearningOptions({options, place}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);


  const handleSelect = (option) => {
    setSelected(place === 3 ? options[0] : option);
    setOpen(false);
  };

  return (
    <div className="stack-wrapper">
      <div className="stack-selected" onClick={() => setOpen(!open)}>
        {place === 3 ? selected.icon : selected.name}
      </div>

      <div className="stack">
        {options.map((option, i) => {
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
                zIndex: options.length - i,
                transitionDelay: `${i * 40}ms`,
              }}
            >
              {place === 3 ? option.icon : option.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}