import "../../styles/shared/Popup.css";

const Popup = (props: any) => {
  return (
    <div className={props.Visible ? "Popup-Background" : "d-none"}>
      <div className="Popup">
        <div className="Popup-Head ps-3">
          <h5>{props.Title}</h5>
          <button onClick={props.Close}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <div className="Popup-Body px-3 py-3">{props.Content}</div>
      </div>
    </div>
  );
};

export default Popup;
