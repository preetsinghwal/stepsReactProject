import { useState } from "react";
import "./index.css";

const messages = ["Learn React", "Apply for jobs", "invest your new income"];

function App() {
  const [step, setStep] = useState(1); // Here on RHS useState gives us an araay first element is the default value and second element is updating function, ON LHS we are destructuring in step(value) and setStep(updater function).
  const [isOpen, setIsOpen] = useState(false);

  const handlePrevious = () => {
    if (step > 1) {
      setStep((previous) => previous - 1);
    }
  };

  const handleNext = () => {
    if (step < 3) {
      setStep((previous) => previous + 1);
    }
  };

  return (
    <div>
      {!isOpen && (
        <div style={{
          height: '100vh', 
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          }}>
          <button
          style={{
            backgroundColor: "#7950f2",
            color: "#ffffff",
            border: "none",
            padding: '15px',
            borderRadius: '10px',
            cursor: 'pointer'
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          Click here to see component UI
        </button>
        </div>
      )}
      {isOpen && (
        <>
          <button className="close" onClick={() => setIsOpen(!isOpen)}>
            &times;
          </button>
          <div className="steps">
            <div className="numbers">
              <div className={`${step >= 1 ? "active" : ""}`}>1</div>
              <div className={`${step >= 2 ? "active" : ""}`}>2</div>
              <div className={`${step >= 3 ? "active" : ""}`}>3</div>
            </div>
            <p className="message">
              Step {step}: {messages[step - 1]}
            </p>
            <div className="buttons">
              <button
                style={{ backgroundColor: "#7950f2", color: "#ffffff" }}
                onClick={handlePrevious}
              >
                Previous
              </button>
              <button
                style={{ backgroundColor: "#7950f2", color: "#ffffff" }}
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
