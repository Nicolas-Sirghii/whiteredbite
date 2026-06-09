import "./Progress_bar.css";

export function ProgressBar() {
    
    const progress = 50; // Example progress value (you can replace this with actual logic to calculate progress)
    return (
        <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
    );
}