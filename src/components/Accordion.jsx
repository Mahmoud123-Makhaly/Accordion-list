import { useState } from "react";
import Item from "./Item";

const Accordion = ({ faqs }) => {
  const [currentOpen, setCurrentOpen] = useState(null);
  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <div key={faq.title}>
          <Item
            number={index < 9 ? `0 ${index + 1}` : `${index + 1}`}
            text={faq.text}
            title={faq.title}
            currentOpen={currentOpen}
            setCurrentOpen={setCurrentOpen}
          >
            {faq.text}
          </Item>
        </div>
      ))}
    </div>
  );
};
export default Accordion;
