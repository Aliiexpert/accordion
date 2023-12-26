import React, { useState } from "react";
import questions from "./Api";
import MyAccordion from "./MyAccordion";
import './Accordion.css';

const Accordion=()=>{
    const [data, setData]=useState(questions);

    return(
        <>
           <div className="accordion-container">
      {data.map((currEle) => {
        const { id } = currEle;
        return <MyAccordion key={id} {...currEle} />;
      })}
    </div>
        </>
    );
}
export default Accordion;