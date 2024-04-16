import "./Buttons.css";

const Buttons = () => {
  return (
    <>
      <div className="buttons-container">
        <button className="button browse-btn">Browse Test Data</button>
        <button className="button connect-btn">
          <div className="circle-plus"></div>
          Connect Domain
        </button>
      </div>
    </>
  );
};

export default Buttons;
