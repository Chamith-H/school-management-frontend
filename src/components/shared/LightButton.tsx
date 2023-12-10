import "../../styles/shared/LightButton.css";

const LightButton = (props: any) => {
  return (
    <button className="Light-Button py-1 px-4" onClick={props.Action}>
      {props.Name}
    </button>
  );
};

export default LightButton;
