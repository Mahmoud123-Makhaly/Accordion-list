const Item = ({ title, children, number, currentOpen, setCurrentOpen }) => {
  const isOpen = currentOpen === number;
  const handleOpenToggle = () => {
    setCurrentOpen(isOpen?null:number);
  };
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleOpenToggle}>
      <p className="number">{number}</p>
      <p className="title">{title}</p>
      <div className="icon">{isOpen ? "-" : "+"}</div>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
};
export default Item;
