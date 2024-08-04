import "./Accordion.css";

export const Accordion = ({ children, ...props }) => {
    return <div {...props} className="accordion">{children}</div>;
  };
  
  export const AccordionContent = ({ children, active, ...props }) => {
    return (
      <div {...props} className={`accordion-content ${active ? 'active' : ''}`}>
        {children}
      </div>
    );
  };
  
  export const AccordionItem = ({ children, ...props }) => {
    return <div {...props} className="accordion-item">{children}</div>;
  };
  
  export const AccordionTrigger = ({ onClick, ...props }) => {
    return <button {...props} className="accordion-trigger" onClick={onClick}>{props.children}</button>;
  };