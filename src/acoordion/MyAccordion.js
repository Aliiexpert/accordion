import React, { useState } from "react";


const MyAccordion = ({ question, answer }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleAccordion = () => {
      setIsExpanded(!isExpanded);
    };

    return(
        <>
        <div className="accordion-item">
      <h1 className="accordion-question" onClick={toggleAccordion}>
      {isExpanded ? "−" : "+"} {question}
      </h1>
      {isExpanded && <p className="accordion-answer">{answer}</p>}
    </div>
    </>
    )
};
export default MyAccordion;