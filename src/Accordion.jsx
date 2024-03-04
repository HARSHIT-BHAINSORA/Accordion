import React from "react";
import { data } from "./utils";
import { useState } from "react";
import AccordionItem from "./AccordionItem";
import "./Accordion.css";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (id) => {
    setActiveIndex((currentId) => (currentId === id ? null : id));
  };

  return (
    <div className="container">
      <h1>Accordion</h1>
      {data.map((it) => (
        <AccordionItem
          key={it.id}
          question={it.question}
          answer={it.answer}
          isOpen={activeIndex === it.id} // initial mai har koee false hoga null === id
          onClick={() => handleItemClick(it.id)}
        />
      ))}
    </div>
  );
};

export default Accordion;
